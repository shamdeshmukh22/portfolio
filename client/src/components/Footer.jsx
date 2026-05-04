import { Heart, Terminal, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';

const footerLinks = [
  { name: 'Home',     href: '#home' },
  { name: 'About',    href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact',  href: '#contact' },
];

const socials = [
  { icon: FaGithub,     href: 'https://github.com/shamdeshmukh22',                         label: 'GitHub',     accent: '#8b5cf6' },
  { icon: FaLinkedin,   href: 'https://www.linkedin.com/in/ghansham-deshmukh-a995a72bb', label: 'LinkedIn',   accent: '#0a66c2' },
  { icon: SiLeetcode,   href: 'https://leetcode.com/u/ghansham-deshmukh-0218/',             label: 'LeetCode',   accent: '#f97316' },
  { icon: SiHackerrank, href: 'https://www.hackerrank.com/profile/ghanshamdeshmuk1',        label: 'HackerRank', accent: '#14b8a6' },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden pt-16 pb-8"
      style={{
        background: '#090910',
        borderTop: '1px solid rgba(139,92,246,0.15)',
      }}
    >
      {/* Top glow line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #8b5cf6, #14b8a6, transparent)' }}
      />

      {/* Subtle orb */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] opacity-10"
        style={{ background: 'radial-gradient(ellipse, #8b5cf6, transparent)', filter: 'blur(60px)', pointerEvents: 'none' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Main row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">

          {/* Brand */}
          <div className="max-w-xs">
            <a href="#home" className="flex items-center gap-2 mb-4 group w-fit">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ background: 'linear-gradient(135deg, #14b8a6, #8b5cf6)' }}
              >
                <Terminal size={15} className="text-white" />
              </div>
              <span className="text-xl font-bold font-mono" style={{ color: '#eeeef6' }}>
                GD<span style={{ color: '#14b8a6' }}>.</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#5a5a8a' }}>
              Building practical, impactful applications while exploring the frontiers of Generative AI.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neon-400 relative pulse-ring shrink-0" />
              <span className="text-xs font-mono" style={{ color: '#14b8a6' }}>open to opportunities</span>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-xs font-mono mb-4" style={{ color: '#3d3d6b' }}>// navigate</p>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm font-medium transition-all duration-200 flex items-center gap-2 group"
                    style={{ color: '#8888b0' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#2dd4bf'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#8888b0'; }}
                  >
                    <span className="font-mono text-xs" style={{ color: '#3d3d6b' }}>→</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="text-xs font-mono mb-4" style={{ color: '#3d3d6b' }}>// find me on</p>
            <div className="flex flex-col gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm font-medium transition-all duration-200 group"
                  style={{ color: '#8888b0' }}
                  onMouseEnter={e => { e.currentTarget.style.color = s.accent; }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#8888b0'; }}
                >
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                    onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 0 12px ${s.accent}55`; e.currentTarget.style.borderColor = `${s.accent}50`; }}
                    onMouseLeave={e => { e.currentTarget.style.boxShadow = ''; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; }}
                  >
                    <s.icon size={14} />
                  </div>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="mb-6 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.2), transparent)' }}
        />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs font-mono" style={{ color: '#3d3d6b' }}>
            © {new Date().getFullYear()} Ghansham Deshmukh · All rights reserved
          </p>
          <p className="text-xs flex items-center gap-1.5" style={{ color: '#3d3d6b' }}>
            Built with <Heart size={13} style={{ color: '#f472b6' }} /> &amp; lots of{' '}
            <span style={{ color: '#14b8a6' }} className="font-mono">{'</>'}</span>
          </p>

          {/* Back to top */}
          <a
            href="#home"
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
            style={{ background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.25)', color: '#a78bfa' }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 14px rgba(139,92,246,0.4)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = ''; }}
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
