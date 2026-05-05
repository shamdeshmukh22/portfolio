import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Calendar, Sparkles } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    title: 'AgriMitra',
    subtitle: 'P2P Agricultural Equipment Rental',
    description:
      'A peer-to-peer marketplace enabling marginal farmers to access tractors, harvesters and machinery at affordable rates — with location-based search, automated booking, contract generation & Razorpay.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&auto=format&fit=crop&q=60',
    tags: ['Django', 'PostgreSQL', 'Razorpay', 'Python', 'Bootstrap'],
    year: '2025',
    highlights: ['Location-based equipment search', 'Automated rental lifecycle', 'Razorpay payment gateway'],
    github: 'https://github.com/shamdeshmukh22',
    live: '#',
    accent: '#14b8a6',
    glow: 'rgba(20,184,166,0.3)',
    badge: '🌾',
  },
  {
    id: 2,
    title: 'Examly',
    subtitle: 'AI-Powered Exam & Study Companion',
    description:
      'AI-driven study platform using Gemini AI to create personalised study plans & quizzes. Features an intelligent Study Planner, AI Mock Test Generator with auto-evaluation, and a Recharts dashboard.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&auto=format&fit=crop&q=60',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Gemini AI', 'Recharts'],
    year: '2026',
    highlights: ['Gemini AI quiz generation', 'Personalised daily planner', 'Performance dashboard'],
    github: 'https://github.com/shamdeshmukh22',
    live: '#',
    accent: '#8b5cf6',
    glow: 'rgba(139,92,246,0.3)',
    badge: '🤖',
  },
  {
    id: 3,
    title: 'Furni',
    subtitle: 'Full-Stack Furniture E-commerce',
    description:
      'Full-stack e-commerce with real-time cart, JWT + RBAC auth, dynamic pricing, and role-based admin & customer dashboards. Inventory management built end-to-end.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=60',
    tags: ['React.js', 'Node.js', 'MySQL', 'JWT', 'Express.js'],
    year: '2025',
    highlights: ['Real-time cart management', 'JWT + RBAC auth', 'Admin & customer dashboards'],
    github: 'https://github.com/shamdeshmukh22',
    live: '#',
    accent: '#f472b6',
    glow: 'rgba(244,114,182,0.3)',
    badge: '🛋️',
  },
];

const allTags = ['All', ...new Set(projectsData.flatMap((p) => p.tags))];

// Tag color cycling
const tagClasses = ['tag-teal', 'tag-volt', 'tag-plasma'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.tags.includes(activeFilter));

  return (
    <section
      id="projects"
      className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, var(--bg-tertiary) 0%, var(--bg-main) 60%, var(--bg-secondary) 100%)' }}
    >
      {/* Decoration */}
      <div className="aurora-orb w-96 h-96 top-[-80px] left-[-60px] opacity-10"
           style={{ background: 'radial-gradient(circle, #f472b6, transparent)' }} />
      <div className="aurora-orb w-80 h-80 bottom-[-60px] right-[-40px] opacity-10"
           style={{ background: 'radial-gradient(circle, #14b8a6, transparent)', animationDelay: '3s' }} />
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <span className="section-label mb-5 inline-flex">What I've Built</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mt-4 mb-4" style={{ color: 'var(--text-main)' }}
          >
            Featured <span className="shimmer-text">Projects</span>
          </motion.h2>
          <p className="max-w-2xl mx-auto text-base" style={{ color: 'var(--text-muted)' }}>
            Real-world applications spanning AI, agriculture, and e-commerce — built from scratch.
          </p>
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold font-mono transition-all duration-250 ${
                activeFilter === tag ? 'filter-chip-active' : 'filter-chip'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <motion.div layout className="grid lg:grid-cols-3 gap-7">
          <AnimatePresence>
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.88, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.88 }}
                transition={{ duration: 0.35 }}
                className="tilt-card glass-card overflow-hidden flex flex-col group"
                onMouseEnter={e => { e.currentTarget.style.borderColor = `${project.accent}45`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = ''; }}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <div
                    className="absolute inset-0 z-10"
                    style={{ background: 'linear-gradient(to top, rgba(10,10,15,0.95) 0%, rgba(10,10,15,0.2) 60%, transparent 100%)' }}
                  />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-600"
                  />

                  {/* Year */}
                  <span
                    className="absolute top-3 right-3 z-20 flex items-center gap-1 text-xs font-mono font-bold px-3 py-1 rounded-full"
                    style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)', color: '#c0c0d8', border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    <Calendar size={11} /> {project.year}
                  </span>

                  {/* Badge emoji */}
                  <span className="absolute top-3 left-3 z-20 text-2xl">{project.badge}</span>

                  {/* Title overlay */}
                  <div className="absolute bottom-3 left-4 z-20">
                    <h3 className="text-xl font-extrabold text-white drop-shadow-lg">{project.title}</h3>
                    <p className="text-xs" style={{ color: project.accent }}>{project.subtitle}</p>
                  </div>

                  {/* Accent bottom bar */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-px z-20"
                    style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
                  />
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-sm mb-4 leading-relaxed line-clamp-3" style={{ color: 'var(--text-muted)' }}>
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-5">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: project.accent, boxShadow: `0 0 6px ${project.accent}` }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag, ti) => (
                      <span key={tag} className={tagClasses[ti % 3]}>{tag}</span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div
                    className="flex items-center gap-3 pt-4 mt-auto"
                    style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold transition-all duration-200 px-3 py-1.5 rounded-lg"
                      style={{ color: 'var(--text-muted)', border: '1px solid var(--glass-border)' }}
                      onMouseEnter={e => { e.currentTarget.style.color = 'var(--text-main)'; e.currentTarget.style.background = 'var(--glass-bg)'; }}
                      onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.background = ''; }}
                    >
                      <FaGithub size={16} /> Code
                    </a>
                    <a
                      href={project.live}
                      className="ml-auto flex items-center gap-1.5 text-sm font-bold transition-all duration-200"
                      style={{ color: project.accent }}
                      onMouseEnter={e => { e.currentTarget.style.textShadow = `0 0 12px ${project.accent}`; }}
                      onMouseLeave={e => { e.currentTarget.style.textShadow = ''; }}
                    >
                      Live Demo <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="text-center mt-14"
        >
          <a
            href="https://github.com/shamdeshmukh22"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex"
          >
            <FaGithub size={20} />
            <Sparkles size={15} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
