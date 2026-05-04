import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Terminal } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const navLinks = [
  { name: 'Home',     href: '#home' },
  { name: 'About',    href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact',  href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled]       = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink]       = useState('Home');
  const { theme, toggleTheme }            = useTheme();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={
        isScrolled
          ? {
              background: 'var(--nav-bg)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--glass-border)',
              boxShadow: '0 4px 30px rgba(0,0,0,0.1)',
              padding: '10px 0',
            }
          : { background: 'transparent', padding: '18px 0' }
      }
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 group"
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
            style={{ background: 'linear-gradient(135deg, #14b8a6, #8b5cf6)' }}
          >
            <Terminal size={16} className="text-white" />
          </div>
          <span
            className="text-xl font-bold font-mono tracking-tight"
            style={{ color: 'var(--text-main)' }}
          >
            GD<span style={{ color: '#14b8a6' }}>.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveLink(link.name)}
              className="relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group"
              style={{ color: activeLink === link.name ? '#2dd4bf' : 'var(--text-muted)' }}
            >
              {link.name}
              {/* underline glow */}
              <span
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px transition-all duration-300"
                style={{
                  width: activeLink === link.name ? '60%' : '0%',
                  background: 'linear-gradient(90deg, transparent, #14b8a6, transparent)',
                  boxShadow: '0 0 8px #14b8a6',
                }}
              />
              <span
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'rgba(20,184,166,0.06)' }}
              />
            </a>
          ))}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="ml-3 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(139,92,246,0.2)',
              color: '#a78bfa',
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 16px rgba(139,92,246,0.4)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = ''; }}
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* Hire Me pill */}
          <a href="#contact" className="ml-3 btn-neon" style={{ padding: '8px 20px', fontSize: '0.8rem' }}>
            Hire Me
          </a>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(139,92,246,0.2)', color: '#a78bfa' }}
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(139,92,246,0.2)', color: '#eeeef6' }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{
              background: 'rgba(10,10,15,0.95)',
              borderTop: '1px solid rgba(139,92,246,0.15)',
            }}
          >
            <div className="px-6 py-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => { setActiveLink(link.name); setMobileMenuOpen(false); }}
                  className="text-base font-medium py-2 px-3 rounded-lg transition-all"
                  style={{ color: '#c0c0d8' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#2dd4bf'; e.currentTarget.style.background = 'rgba(20,184,166,0.07)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#c0c0d8'; e.currentTarget.style.background = ''; }}
                >
                  <span className="font-mono text-neon-500 mr-2 text-xs">{'>'}</span>{link.name}
                </a>
              ))}
              <a href="#contact" className="btn-neon mt-2 justify-center">Hire Me</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
