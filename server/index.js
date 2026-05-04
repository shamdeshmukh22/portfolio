require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const contactRoutes = require('./routes/contact');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', contactRoutes);

// UI Route to view messages in the browser
const Message = require('./models/Message');

app.delete('/messages/:id', async (req, res) => {
  try {
    await Message.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete message' });
  }
});

app.get('/messages', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Command Center - Inbox</title>
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;600;700&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
        <style>
            :root {
                --bg: #0a0a0f;
                --card-bg: rgba(14, 14, 28, 0.6);
                --cyan: #2dd4bf;
                --purple: #8b5cf6;
                --pink: #ec4899;
                --text-main: #eeeef6;
                --text-muted: #8888b0;
            }
            body {
                font-family: 'Space Grotesk', sans-serif;
                background-color: var(--bg);
                color: var(--text-main);
                margin: 0;
                padding: 40px 20px;
                min-height: 100vh;
                position: relative;
                overflow-x: hidden;
            }
            /* Grid Background */
            body::before {
                content: '';
                position: absolute;
                inset: 0;
                background-image: 
                    linear-gradient(rgba(139,92,246,0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(139,92,246,0.05) 1px, transparent 1px);
                background-size: 50px 50px;
                z-index: -2;
            }
            /* Glowing Orbs */
            .orb {
                position: absolute;
                border-radius: 50%;
                filter: blur(80px);
                z-index: -1;
                opacity: 0.15;
            }
            .orb-1 { width: 400px; height: 400px; background: var(--purple); top: -100px; left: -100px; }
            .orb-2 { width: 300px; height: 300px; background: var(--cyan); bottom: 10%; right: -50px; }
            
            .container {
                max-width: 900px;
                margin: 0 auto;
            }
            h1 {
                text-align: center;
                font-size: 3em;
                font-weight: 700;
                margin-bottom: 50px;
                background: linear-gradient(90deg, var(--cyan), var(--purple), var(--pink));
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                animation: shimmer 3s infinite linear;
                background-size: 200% auto;
            }
            @keyframes shimmer {
                0% { background-position: -200% center; }
                100% { background-position: 200% center; }
            }
            .message-card {
                background: var(--card-bg);
                backdrop-filter: blur(12px);
                border: 1px solid rgba(139,92,246,0.2);
                border-radius: 16px;
                padding: 30px;
                margin-bottom: 30px;
                position: relative;
                transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                box-shadow: 0 10px 30px rgba(0,0,0,0.4);
            }
            .message-card:hover {
                transform: translateY(-5px) scale(1.01);
                border-color: rgba(45,212,191,0.5);
                box-shadow: 0 15px 40px rgba(45,212,191,0.15);
            }
            .message-header {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                margin-bottom: 20px;
                border-bottom: 1px solid rgba(255,255,255,0.05);
                padding-bottom: 15px;
            }
            .name {
                font-size: 1.4em;
                font-weight: 700;
                color: var(--text-main);
                display: flex;
                align-items: center;
                gap: 10px;
            }
            .name::before {
                content: '';
                display: inline-block;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: var(--cyan);
                box-shadow: 0 0 10px var(--cyan);
            }
            .email {
                font-family: 'JetBrains Mono', monospace;
                font-size: 0.85em;
                color: var(--cyan);
                text-decoration: none;
                background: rgba(45,212,191,0.1);
                padding: 6px 12px;
                border-radius: 8px;
                display: inline-block;
                margin-top: 10px;
                border: 1px solid rgba(45,212,191,0.2);
                transition: all 0.3s;
            }
            .email:hover {
                background: rgba(45,212,191,0.2);
                box-shadow: 0 0 15px rgba(45,212,191,0.3);
            }
            .date {
                font-family: 'JetBrains Mono', monospace;
                color: var(--text-muted);
                font-size: 0.8em;
                background: rgba(0,0,0,0.3);
                padding: 6px 12px;
                border-radius: 6px;
                border: 1px solid rgba(255,255,255,0.05);
            }
            .content {
                line-height: 1.8;
                white-space: pre-wrap;
                color: #c0c0d8;
                font-size: 1.1em;
                background: rgba(0,0,0,0.2);
                padding: 20px;
                border-radius: 10px;
                border-left: 3px solid var(--purple);
            }
            .message-footer {
                display: flex;
                justify-content: flex-end;
                margin-top: 15px;
            }
            .btn-delete {
                position: absolute;
                top: 25px;
                right: 25px;
                background: rgba(236, 72, 153, 0.1);
                color: var(--pink);
                border: 1px solid rgba(236, 72, 153, 0.3);
                padding: 8px 16px;
                border-radius: 8px;
                font-family: 'JetBrains Mono', monospace;
                font-size: 0.8em;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.3s;
                display: flex;
                align-items: center;
                gap: 6px;
            }
            .btn-delete:hover {
                background: var(--pink);
                color: #fff;
                box-shadow: 0 0 20px rgba(236, 72, 153, 0.5);
                transform: scale(1.05);
            }
            .empty-state {
                text-align: center;
                padding: 50px;
                border: 1px dashed rgba(139,92,246,0.3);
                border-radius: 16px;
                color: var(--text-muted);
            }
            /* Custom Scrollbar */
            ::-webkit-scrollbar { width: 8px; }
            ::-webkit-scrollbar-track { background: var(--bg); }
            ::-webkit-scrollbar-thumb { background: var(--purple); border-radius: 10px; }
        </style>
    </head>
    <body>
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        <div class="container">
            <h1>Command Center // Inbox</h1>
            <div id="message-list">
                ${messages.map(m => `
                    <div class="message-card" id="msg-${m._id}">
                        <button class="btn-delete" onclick="deleteMessage('${m._id}')">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                            Delete
                        </button>
                        <div class="message-header">
                            <div>
                                <div class="name">${m.name}</div>
                                <a href="mailto:${m.email}" class="email">✉ ${m.email}</a>
                            </div>
                        </div>
                        <div class="content">${m.message}</div>
                        <div class="message-footer">
                            <div class="date">${new Date(m.createdAt || Date.now()).toLocaleString()}</div>
                        </div>
                    </div>
                `).join('')}
                ${messages.length === 0 ? '<div class="empty-state"><h3>No messages in inbox.</h3><p>Waiting for incoming transmissions...</p></div>' : ''}
            </div>
        </div>

        <script>
            async function deleteMessage(id) {
                if(!confirm('Are you sure you want to delete this message?')) return;
                
                try {
                    const btn = document.querySelector(\`#msg-\${id} .btn-delete\`);
                    btn.innerHTML = 'Deleting...';
                    btn.style.opacity = '0.5';

                    const res = await fetch('/messages/' + id, { method: 'DELETE' });
                    const data = await res.json();
                    
                    if (data.success) {
                        const card = document.getElementById('msg-' + id);
                        card.style.transform = 'scale(0.8) translateY(-50px)';
                        card.style.opacity = '0';
                        setTimeout(() => {
                            card.remove();
                            // Check if empty
                            if (document.querySelectorAll('.message-card').length === 0) {
                                document.getElementById('message-list').innerHTML = '<div class="empty-state"><h3>No messages in inbox.</h3><p>Waiting for incoming transmissions...</p></div>';
                            }
                        }, 400);
                    } else {
                        alert('Failed to delete message.');
                        btn.innerHTML = 'Delete';
                        btn.style.opacity = '1';
                    }
                } catch (err) {
                    alert('Error deleting message.');
                    console.error(err);
                }
            }
        </script>
    </body>
    </html>
    `;
    
    res.send(html);
  } catch (error) {
    console.error('Error fetching UI messages:', error);
    res.status(500).send('<h1 style="color:red; text-align:center;">Failed to load messages.</h1>');
  }
});

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
