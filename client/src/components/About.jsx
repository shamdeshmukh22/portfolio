import { motion } from 'framer-motion';
import { Code2, Server, Database, Wrench, GraduationCap, BookOpen } from 'lucide-react';

const skillGroups = [
  {
    name: 'Languages & Core',
    icon: Code2,
    color: '#14b8a6',
    glow: 'rgba(20,184,166,0.25)',
    items: ['Java (DSA)', 'Python', 'JavaScript ES6+', 'SQL', 'HTML5', 'CSS3'],
    tagClass: 'tag-teal',
  },
  {
    name: 'Frontend',
    icon: Wrench,
    color: '#a78bfa',
    glow: 'rgba(139,92,246,0.25)',
    items: ['React.js', 'Bootstrap 5', 'Tailwind CSS', 'Framer Motion'],
    tagClass: 'tag-volt',
  },
  {
    name: 'Backend',
    icon: Server,
    color: '#f472b6',
    glow: 'rgba(236,72,153,0.2)',
    items: ['Node.js', 'Express.js', 'Django', 'RESTful APIs'],
    tagClass: 'tag-plasma',
  },
  {
    name: 'Databases',
    icon: Database,
    color: '#14b8a6',
    glow: 'rgba(20,184,166,0.25)',
    items: ['MySQL', 'PostgreSQL', 'MongoDB'],
    tagClass: 'tag-teal',
  },
];

const achievements = [
  {
    emoji: '🏆',
    title: 'MAH-MCA-CET 2025',
    desc: '99.00 Percentile — AIR 324',
    accent: '#f59e0b',
    glow: 'rgba(245,158,11,0.3)',
    bg: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(239,68,68,0.1))',
  },
  {
    emoji: '⚡',
    title: 'LeetCode',
    desc: '250+ Problems — Peak Rating 1415',
    accent: '#f97316',
    glow: 'rgba(249,115,22,0.3)',
    bg: 'linear-gradient(135deg, rgba(249,115,22,0.12), rgba(245,158,11,0.08))',
  },
  {
    emoji: '🎓',
    title: 'Full Stack Certified',
    desc: 'Certified by A2Z Infotech (2024)',
    accent: '#14b8a6',
    glow: 'rgba(20,184,166,0.3)',
    bg: 'linear-gradient(135deg, rgba(20,184,166,0.12), rgba(139,92,246,0.08))',
  },
];

// Education ONLY — no projects here
const education = [
  {
    icon: GraduationCap,
    year: '2025 – 2027',
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Pimpri Chinchwad College of Engineering (PCCOE), Pune',
    detail: 'CGPA: 8.0 / 10.0',
    note: 'Specialising in Generative AI & Agentic AI development.',
    accent: '#8b5cf6',
  },
  {
    icon: BookOpen,
    year: '2022 – 2025',
    degree: 'Bachelor of Computer Science (BCS)',
    institution: 'Savitribai Phule Pune University, Ahmadnagar',
    detail: 'CGPA: 7.83 / 10.0',
    note: 'Strong foundation in Data Structures, Algorithms & Software Engineering.',
    accent: '#14b8a6',
  },
];

const sectionBg = {
  background: 'linear-gradient(180deg, #0a0a0f 0%, #0d0d18 50%, #0a0a0f 100%)',
};

export default function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden transition-colors duration-300" style={{ background: 'var(--bg-main)' }}>
      {/* Orbs */}
      <div className="aurora-orb w-80 h-80 top-10 right-[-60px] opacity-10"
           style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)' }} />
      <div className="aurora-orb w-60 h-60 bottom-10 left-[-40px] opacity-10"
           style={{ background: 'radial-gradient(circle, #14b8a6, transparent)', animationDelay: '4s' }} />
      <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section header */}
        <div className="text-center mb-20">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <span className="section-label mb-5 inline-flex">Who Am I?</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mt-4 mb-4" style={{ color: 'var(--text-main)' }}
          >
            About <span className="shimmer-text">Me</span>
          </motion.h2>
          <p className="max-w-3xl mx-auto text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Hi, I'm <span style={{ color: '#2dd4bf', fontWeight: 600 }}>Ghansham Deshmukh</span>. I am a passionate Full-Stack Developer currently pursuing my MCA at PCCOE, Pune. I specialize in building highly scalable, interactive web applications using React, Node.js, Python, and Django. Beyond building robust systems from front to back, I am deeply exploring <span style={{ color: '#a78bfa', fontWeight: 600 }}>Generative AI & Agentic AI</span>, striving to build intelligent solutions that solve complex real-world problems and push the boundaries of technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* ── LEFT: Skills + Achievements ── */}
          <div>
            <h3 className="text-xl font-bold mb-7 flex items-center gap-3" style={{ color: 'var(--text-main)' }}>
              <span className="w-8 h-px" style={{ background: 'linear-gradient(90deg, #14b8a6, transparent)' }} />
              Technical Skills
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {skillGroups.map((g, i) => (
                <motion.div
                  key={g.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass-card p-5 group cursor-default"
                  style={{ '--glow': g.glow }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 0 30px ${g.glow}`; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = ''; }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ background: `${g.color}18`, color: g.color, border: `1px solid ${g.color}30` }}
                    >
                      <g.icon size={17} />
                    </div>
                    <h4 className="font-semibold text-sm" style={{ color: 'var(--text-main)' }}>{g.name}</h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {g.items.map((item) => (
                      <span key={item} className={g.tagClass}>{item}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Achievements */}
            <h3 className="text-xl font-bold mb-5 flex items-center gap-3" style={{ color: 'var(--text-main)' }}>
              <span className="w-8 h-px" style={{ background: 'linear-gradient(90deg, #8b5cf6, transparent)' }} />
              Achievements
            </h3>
            <div className="space-y-3">
              {achievements.map((a, i) => (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.09 }}
                  className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 cursor-default"
                  style={{ background: a.bg, border: `1px solid ${a.accent}22` }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 0 20px ${a.glow}`; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = ''; }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                    style={{ background: `${a.accent}18`, border: `1px solid ${a.accent}30` }}
                  >
                    {a.emoji}
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: 'var(--text-main)' }}>{a.title}</p>
                    <p className="text-xs mt-0.5" style={{ color: '#8888b0' }}>{a.desc}</p>
                  </div>
                  <div className="ml-auto w-1.5 h-8 rounded-full shrink-0"
                       style={{ background: `linear-gradient(180deg, ${a.accent}, transparent)` }} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Education Only ── */}
          <div>
            <h3 className="text-xl font-bold mb-7 flex items-center gap-3" style={{ color: 'var(--text-main)' }}>
              <span className="w-8 h-px" style={{ background: 'linear-gradient(90deg, #8b5cf6, transparent)' }} />
              Education
            </h3>

            <div className="relative pl-7 space-y-6">
              {/* Vertical line */}
              <div
                className="absolute left-0 top-2 bottom-2 w-px"
                style={{ background: 'linear-gradient(180deg, #8b5cf6, #14b8a6)' }}
              />

              {education.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative"
                >
                  {/* Dot */}
                  <div
                    className="absolute -left-[30px] top-4 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${item.accent}, ${item.accent}88)`,
                      boxShadow: `0 0 10px ${item.accent}55`,
                    }}
                  >
                    <item.icon size={11} className="text-white" />
                  </div>

                  <div
                    className="glass-card p-6 transition-all duration-300 cursor-default"
                    onMouseEnter={e => { e.currentTarget.style.borderColor = `${item.accent}45`; e.currentTarget.style.boxShadow = `0 0 20px ${item.accent}18`; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = ''; e.currentTarget.style.boxShadow = ''; }}
                  >
                    <span
                      className="inline-block px-3 py-0.5 rounded-full text-xs font-mono font-bold mb-3"
                      style={{ background: `${item.accent}15`, color: item.accent, border: `1px solid ${item.accent}28` }}
                    >
                      {item.year}
                    </span>
                    <h4 className="font-bold text-base leading-snug mb-1" style={{ color: 'var(--text-main)' }}>{item.degree}</h4>
                    <p className="text-sm font-semibold mb-1" style={{ color: item.accent }}>{item.institution}</p>
                    <p className="text-xs font-mono mb-2" style={{ color: '#5a5a8a' }}>{item.detail}</p>
                    <p className="text-sm leading-relaxed" style={{ color: '#8888b0' }}>{item.note}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
