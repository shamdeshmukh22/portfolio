import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, MapPin, Mail, Zap } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';

const roles = [
  'Full-Stack Developer',
  'AI Enthusiast',
  'Problem Solver',
  'MCA @ PCCOE',
];

const socials = [
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ghansham-deshmukh-a995a72bb', label: 'LinkedIn', glow: '#0a66c2' },
  { icon: FaGithub, href: 'https://github.com/shamdeshmukh22', label: 'GitHub', glow: '#8b5cf6' },
  { icon: SiLeetcode, href: 'https://leetcode.com/u/ghansham-deshmukh-0218/', label: 'LeetCode', glow: '#f97316' },
  { icon: SiHackerrank, href: 'https://www.hackerrank.com/profile/ghanshamdeshmuk1', label: 'HackerRank', glow: '#14b8a6' },
];

const stats = [
  { value: '250+', label: 'LeetCode Solved', icon: '⚡' },
  { value: 'AIR 324', label: 'MAH-MCA-CET', icon: '🏆' },
  { value: '3+', label: 'Projects Built', icon: '🚀' },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = roles[roleIndex];
    let timeout;
    if (!deleting && displayed.length < full.length) {
      timeout = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === full.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 pb-16 relative overflow-hidden bg-grid transition-colors duration-300"
      style={{ background: 'var(--bg-main)' }}
    >
      {/* Aurora orbs */}
      <div className="aurora-orb w-[500px] h-[500px] top-[-120px] right-[-100px] opacity-20"
        style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)' }} />
      <div className="aurora-orb w-[400px] h-[400px] bottom-[-80px] left-[-80px] opacity-15"
        style={{ background: 'radial-gradient(circle, #14b8a6, transparent)', animationDelay: '3s' }} />
      <div className="aurora-orb w-[250px] h-[250px] top-[40%] left-[30%] opacity-10"
        style={{ background: 'radial-gradient(circle, #ec4899, transparent)', animationDelay: '5s' }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-14 items-center relative z-10">

        {/* ── LEFT ── */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          {/* Terminal badge */}
          <div className="inline-flex items-center gap-2 mb-7 px-4 py-2 rounded-lg glass border border-neon-700/30 font-mono text-xs text-neon-400" style={{ background: 'var(--glass-bg)' }}>
            <span className="w-2 h-2 rounded-full bg-neon-400 relative pulse-ring shrink-0" />
            <span>&gt; status: <span className="font-bold" style={{ color: 'var(--text-main)' }}>open_to_opportunities</span></span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-3 tracking-tight" style={{ color: 'var(--text-main)' }}>
            Hi, I'm{' '}
            <span className="shimmer-text">Ghansham</span>
          </h1>

          {/* Typewriter */}
          <div className="text-2xl md:text-3xl font-semibold mb-6 h-10 flex items-center"
            style={{ color: 'var(--text-main)' }}>
            <span className="text-volt-400 mr-2 font-mono">//</span>
            <span className="typewriter-cursor">{displayed}</span>
          </div>

          {/* Meta info */}
          <div className="flex flex-wrap gap-4 mb-7 text-sm" style={{ color: 'var(--text-muted)' }}>
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-neon-400" /> Pune, Maharashtra
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={14} className="text-volt-400" /> ghanshamdeshmukh2003@gmail.com
            </span>
          </div>

          <p className="text-base leading-relaxed mb-9 max-w-lg" style={{ color: 'var(--text-muted)' }}>
            MCA student at{' '}
            <span style={{ color: '#2dd4bf', fontWeight: 600 }}>PCCOE, Pune</span>{' '}
            crafting practical apps and exploring{' '}
            <span style={{ color: '#a78bfa', fontWeight: 600 }}>Generative AI & Agentic AI</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a href="#projects" className="btn-neon">
              View My Work <ArrowRight size={17} />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <Download size={17} /> Download CV
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5 flex-wrap">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
                className="w-10 h-10 rounded-xl glass flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                style={{ color: 'var(--text-muted)', background: 'var(--glass-bg)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = s.glow;
                  e.currentTarget.style.boxShadow = `0 0 18px ${s.glow}55`;
                  e.currentTarget.style.borderColor = `${s.glow}60`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'var(--text-muted)';
                  e.currentTarget.style.boxShadow = '';
                  e.currentTarget.style.borderColor = '';
                }}
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* ── RIGHT ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
          className="hidden md:flex flex-col items-center gap-10 relative"
        >
          {/* Main Languages / Tech Stack (Floating dynamically) */}

          {/* Avatar hex ring */}
          <div className="relative w-72 h-72">
            {/* Rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-[-12px] rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, #14b8a6, #8b5cf6, #ec4899, #14b8a6)',
                padding: '2px',
                borderRadius: '50%',
              }}
            >
              <div className="w-full h-full rounded-full" style={{ background: 'var(--bg-main)' }} />
            </motion.div>

            {/* Inner glow */}
            <div className="absolute inset-0 rounded-full opacity-30"
              style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)' }} />

            {/* Avatar */}
            <div className="absolute inset-0 rounded-full flex items-center justify-center overflow-hidden"
              style={{ background: 'var(--bg-secondary)' }}>
              <span className="text-6xl font-black shimmer-text select-none">GD</span>
            </div>

            {/* Floating badge — CET */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
              className="absolute -bottom-5 -left-10 glass-card px-4 py-3 flex items-center gap-3"
              style={{ background: 'var(--glass-bg)', borderColor: 'var(--glass-border)' }}
            >
              <span className="text-xl">🏆</span>
              <div>
                <p className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>MAH-MCA-CET</p>
                <p className="text-sm font-bold" style={{ color: 'var(--text-main)' }}>AIR 324</p>
              </div>
            </motion.div>

            {/* Floating badge — LeetCode */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 0.8 }}
              className="absolute -top-5 -left-10 glass-card px-4 py-3 flex items-center gap-3"
              style={{ background: 'var(--glass-bg)', borderColor: 'var(--glass-border)' }}
            >
              <span className="text-xl">⚡</span>
              <div>
                <p className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>LeetCode</p>
                <p className="text-sm font-bold" style={{ color: 'var(--text-main)' }}>250+ Solved</p>
              </div>
            </motion.div>
          </div>

          {/* Stats row */}
          <div className="flex gap-5 mt-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.12 }}
                className="glass-card px-5 py-4 text-center min-w-[90px]"
                style={{ background: 'var(--glass-bg)', borderColor: 'var(--glass-border)' }}
              >
                <p className="text-lg mb-1">{s.icon}</p>
                <p className="text-xl font-black glow-text" style={{ color: '#2dd4bf' }}>{s.value}</p>
                <p className="text-xs mt-1 font-mono" style={{ color: 'var(--text-muted)' }}>{s.label}</p>
              </motion.div>
            ))}
          </div>

        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: '#5a5a8a' }}
      >
        <span className="text-xs font-mono">scroll</span>
        <div className="w-px h-8" style={{ background: 'linear-gradient(180deg, #8b5cf6, transparent)' }} />
      </motion.div>
    </section>
  );
}
