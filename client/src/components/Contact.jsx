import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Mail, MapPin, Phone, Send, Loader2, Zap } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';
import { motion } from 'framer-motion';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ghanshamdeshmukh2003@gmail.com',
    href: 'mailto:ghanshamdeshmukh2003@gmail.com',
    accent: '#8b5cf6',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Pune, Maharashtra, India',
    href: null,
    accent: '#f472b6',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9322455289',
    href: 'tel:+919322455289',
    accent: '#14b8a6',
  },
];

const socialLinks = [
  { icon: FaLinkedin,   href: 'https://www.linkedin.com/in/ghansham-deshmukh-a995a72bb', label: 'LinkedIn',   accent: '#0a66c2' },
  { icon: FaGithub,     href: 'https://github.com/shamdeshmukh22',                         label: 'GitHub',     accent: '#8b5cf6' },
  { icon: SiLeetcode,   href: 'https://leetcode.com/u/ghansham-deshmukh-0218/',             label: 'LeetCode',   accent: '#f97316' },
  { icon: SiHackerrank, href: 'https://www.hackerrank.com/profile/ghanshamdeshmuk1',        label: 'HackerRank', accent: '#14b8a6' },
];

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: '12px',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(139,92,246,0.2)',
  color: '#eeeef6',
  outline: 'none',
  fontSize: '0.875rem',
  fontFamily: 'inherit',
  transition: 'all 0.3s ease',
};

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [status, setStatus] = useState(null);

  const onSubmit = async (data) => {
    try {
      setStatus(null);
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      await axios.post(`${apiUrl}/contact`, data);
      setStatus({ type: 'success', message: '✅ Message sent! I\'ll get back to you soon.' });
      reset();
    } catch {
      setStatus({ type: 'error', message: '❌ Failed to send. Please email me directly.' });
    }
  };

  const focusStyle = (e) => {
    e.target.style.borderColor = 'rgba(20,184,166,0.6)';
    e.target.style.boxShadow = '0 0 16px rgba(20,184,166,0.15)';
  };
  const blurStyle = (e) => {
    e.target.style.borderColor = 'rgba(139,92,246,0.2)';
    e.target.style.boxShadow = '';
  };

  return (
    <section
      id="contact"
      className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0a0f 0%, #0d0d18 50%, #0a0a0f 100%)' }}
    >
      {/* Orbs */}
      <div className="aurora-orb w-80 h-80 bottom-[-60px] left-[-40px] opacity-12"
           style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)' }} />
      <div className="aurora-orb w-64 h-64 top-10 right-[-40px] opacity-10"
           style={{ background: 'radial-gradient(circle, #14b8a6, transparent)', animationDelay: '4s' }} />
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <span className="section-label mb-5 inline-flex">Let's Connect</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4"
          >
            Get In <span className="shimmer-text">Touch</span>
          </motion.h2>
          <p className="max-w-xl mx-auto text-base" style={{ color: '#8888b0' }}>
            Have a project idea, collaboration opportunity, or just want to say hi?
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 max-w-4xl mx-auto">

          {/* ── Left info panel ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} className="md:col-span-2 space-y-4"
          >
            {/* Contact cards */}
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 cursor-default group"
                style={{ background: `${item.accent}0a`, border: `1px solid ${item.accent}20` }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 0 20px ${item.accent}22`; e.currentTarget.style.borderColor = `${item.accent}45`; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = ''; e.currentTarget.style.borderColor = `${item.accent}20`; }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${item.accent}15`, color: item.accent }}
                >
                  <item.icon size={18} />
                </div>
                <div>
                  <p className="text-xs font-mono mb-0.5" style={{ color: '#5a5a8a' }}>{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm font-semibold transition-colors break-all"
                      style={{ color: '#c0c0d8' }}
                      onMouseEnter={e => { e.currentTarget.style.color = item.accent; }}
                      onMouseLeave={e => { e.currentTarget.style.color = '#c0c0d8'; }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold" style={{ color: '#c0c0d8' }}>{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Divider */}
            <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent)' }} />

            {/* Social icons */}
            <div>
              <p className="text-xs font-mono mb-3" style={{ color: '#5a5a8a' }}>// find me on</p>
              <div className="flex gap-3 flex-wrap">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#8888b0' }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = s.accent;
                      e.currentTarget.style.boxShadow = `0 0 18px ${s.accent}55`;
                      e.currentTarget.style.borderColor = `${s.accent}60`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = '#8888b0';
                      e.currentTarget.style.boxShadow = '';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    }}
                  >
                    <s.icon size={17} />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="flex items-center gap-2 p-3 rounded-xl"
                 style={{ background: 'rgba(20,184,166,0.07)', border: '1px solid rgba(20,184,166,0.2)' }}>
              <span className="w-2 h-2 rounded-full bg-neon-400 relative pulse-ring shrink-0" />
              <span className="text-xs font-mono" style={{ color: '#2dd4bf' }}>
                Available for internships & freelance
              </span>
            </div>
          </motion.div>

          {/* ── Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} className="md:col-span-3 glass-card p-7"
          >
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono mb-2" style={{ color: '#8888b0' }}>
                    &gt; your_name
                  </label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    placeholder="Jane Smith"
                    style={inputStyle}
                    onFocus={focusStyle}
                    onBlur={blurStyle}
                  />
                  {errors.name && <p className="text-xs mt-1.5" style={{ color: '#f472b6' }}>{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-xs font-mono mb-2" style={{ color: '#8888b0' }}>
                    &gt; your_email
                  </label>
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email' },
                    })}
                    placeholder="jane@example.com"
                    style={inputStyle}
                    onFocus={focusStyle}
                    onBlur={blurStyle}
                  />
                  {errors.email && <p className="text-xs mt-1.5" style={{ color: '#f472b6' }}>{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono mb-2" style={{ color: '#8888b0' }}>
                  &gt; your_message
                </label>
                <textarea
                  {...register('message', { required: 'Message cannot be empty', minLength: { value: 10, message: 'Min 10 characters' } })}
                  rows="6"
                  placeholder="Hi Ghansham, I'd love to collaborate on..."
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={focusStyle}
                  onBlur={blurStyle}
                />
                {errors.message && <p className="text-xs mt-1.5" style={{ color: '#f472b6' }}>{errors.message.message}</p>}
              </div>

              {status && (
                <div
                  className="p-4 rounded-xl text-sm font-medium"
                  style={{
                    background: status.type === 'success' ? 'rgba(20,184,166,0.1)' : 'rgba(244,114,182,0.1)',
                    border: `1px solid ${status.type === 'success' ? 'rgba(20,184,166,0.3)' : 'rgba(244,114,182,0.3)'}`,
                    color: status.type === 'success' ? '#2dd4bf' : '#f472b6',
                  }}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                id="contact-submit-btn"
                disabled={isSubmitting}
                className="btn-volt w-full justify-center py-4 text-sm"
                style={{ opacity: isSubmitting ? 0.65 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
              >
                {isSubmitting ? (
                  <><Loader2 className="animate-spin" size={18} /> Sending…</>
                ) : (
                  <><Zap size={16} /><Send size={16} /> Send Message</>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
