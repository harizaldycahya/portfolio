'use client'

import { useState, useEffect, useRef } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────
type Theme = 'dark' | 'light'

// ─── Data ─────────────────────────────────────────────────────────────────────
const STACKS = [
  { name: 'Laravel', icon: '⬡', color: '#FF2D20', desc: 'Backend & API' },
  { name: 'React', icon: '◎', color: '#61DAFB', desc: 'UI Framework' },
  { name: 'Next.js', icon: '▲', color: '#FFFFFF', desc: 'Full-Stack' },
  { name: 'Express.js', icon: '⬢', color: '#68A063', desc: 'Node Backend' },
]

const PROJECTS = [
  {
    title: 'SaaS Dashboard Platform',
    tag: 'Full-Stack',
    year: '2024',
    desc: 'A multi-tenant SaaS analytics platform with real-time data visualization, role-based access control, and automated reporting.',
    stack: ['Laravel', 'React', 'MySQL'],
    metric: '10k+ users',
  },
  {
    title: 'E-Commerce API Gateway',
    tag: 'Backend',
    year: '2024',
    desc: 'High-performance REST & GraphQL API gateway handling 500+ requests/second, with Redis caching and microservices orchestration.',
    stack: ['Express.js', 'Redis', 'PostgreSQL'],
    metric: '500 req/s',
  },
  {
    title: 'Content Management System',
    tag: 'Full-Stack',
    year: '2023',
    desc: 'Headless CMS built for editorial teams with drag-and-drop builder, multi-language support, and CDN-accelerated delivery.',
    stack: ['Next.js', 'Laravel', 'S3'],
    metric: '99.9% uptime',
  },
  {
    title: 'Real-time Collaboration Tool',
    tag: 'Frontend',
    year: '2023',
    desc: 'Figma-like collaboration tool with WebSocket-powered live cursors, conflict-free document editing, and version history.',
    stack: ['React', 'Express.js', 'Socket.io'],
    metric: '< 50ms latency',
  },
]

const NAV_LINKS = ['Work', 'Stack', 'About', 'Contact']

// ─── Utilities ────────────────────────────────────────────────────────────────
function useTheme() {
  const [theme, setTheme] = useState<Theme>('dark')
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])
  return { theme, toggle: () => setTheme(t => t === 'dark' ? 'light' : 'dark') }
}

function useMagnet(strength = 0.35) {
  const ref = useRef<HTMLDivElement>(null)
  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    const dx = e.clientX - (r.left + r.width / 2)
    const dy = e.clientY - (r.top + r.height / 2)
    ref.current.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`
  }
  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0,0)'
  }
  return { ref, onMouseMove: handleMove, onMouseLeave: handleLeave }
}

// ─── Components ───────────────────────────────────────────────────────────────
function ThemeToggle({ theme, toggle }: { theme: Theme; toggle: () => void }) {
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      style={{
        width: 44, height: 24,
        borderRadius: 12,
        border: '1.5px solid var(--border)',
        background: theme === 'dark' ? 'var(--accent)' : 'var(--muted)',
        cursor: 'pointer',
        position: 'relative',
        transition: 'background 0.3s',
        flexShrink: 0,
      }}
    >
      <span style={{
        position: 'absolute',
        top: 3, left: theme === 'dark' ? 22 : 3,
        width: 16, height: 16,
        borderRadius: '50%',
        background: 'var(--bg)',
        transition: 'left 0.3s',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 9,
      }}>
        {theme === 'dark' ? '☽' : '☀'}
      </span>
    </button>
  )
}

function GlowCursor() {
  const pos = useRef({ x: 0, y: 0 })
  const dot = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dot.current) {
        dot.current.style.left = e.clientX + 'px'
        dot.current.style.top = e.clientY + 'px'
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      ref={dot}
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 9999,
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: 'radial-gradient(circle, var(--glow) 0%, transparent 70%)',
        transform: 'translate(-50%, -50%)',
        transition: 'left 0.15s ease, top 0.15s ease',
        opacity: 0.35,
      }}
    />
  )
}

function StackCard({ item }: { item: typeof STACKS[0] }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: '1px solid var(--border)',
        borderRadius: 12,
        padding: '24px 20px',
        background: hovered ? 'var(--card-hover)' : 'var(--card)',
        transition: 'all 0.25s cubic-bezier(0.34,1.56,0.64,1)',
        transform: hovered ? 'translateY(-6px) scale(1.02)' : 'translateY(0) scale(1)',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {hovered && (
        <div style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(circle at 50% 0%, ${item.color}15 0%, transparent 70%)`,
          pointerEvents: 'none',
        }} />
      )}
      <div style={{ fontSize: 28, marginBottom: 12, color: item.color }}>{item.icon}</div>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, marginBottom: 4, color: 'var(--text)' }}>{item.name}</div>
      <div style={{ fontSize: 12, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{item.desc}</div>
    </div>
  )
}

function ProjectCard({ p, index }: { p: typeof PROJECTS[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: '1px solid var(--border)',
        borderRadius: 16,
        padding: '32px 28px',
        background: hovered ? 'var(--card-hover)' : 'var(--card)',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-4px)' : 'none',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Index number watermark */}
      <div style={{
        position: 'absolute', right: 20, top: 20,
        fontFamily: 'var(--font-display)',
        fontSize: 64, fontWeight: 900,
        color: 'var(--border)',
        lineHeight: 1,
        userSelect: 'none',
        transition: 'color 0.3s',
      }}>
        {String(index + 1).padStart(2, '0')}
      </div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        <span style={{
          padding: '4px 10px', borderRadius: 20,
          fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
          background: 'var(--accent)', color: 'var(--accent-fg)',
          fontWeight: 600,
        }}>{p.tag}</span>
        <span style={{
          padding: '4px 10px', borderRadius: 20,
          fontSize: 11, letterSpacing: '0.1em',
          border: '1px solid var(--border)', color: 'var(--text-muted)',
        }}>{p.year}</span>
      </div>
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 20, fontWeight: 700,
        color: 'var(--text)', marginBottom: 12, lineHeight: 1.3,
        maxWidth: '80%',
      }}>{p.title}</h3>
      <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 20 }}>{p.desc}</p>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
        {p.stack.map(s => (
          <span key={s} style={{
            padding: '3px 10px', borderRadius: 6,
            fontSize: 12, background: 'var(--tag-bg)', color: 'var(--text-muted)',
            border: '1px solid var(--border)',
          }}>{s}</span>
        ))}
      </div>
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: 13, color: 'var(--accent-text)',
        fontWeight: 600, letterSpacing: '0.05em',
      }}>↗ {p.metric}</div>
    </div>
  )
}

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0
        const step = Math.ceil(target / 60)
        const timer = setInterval(() => {
          start = Math.min(start + step, target)
          setCount(start)
          if (start >= target) clearInterval(timer)
        }, 20)
        observer.disconnect()
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])
  return <span ref={ref}>{count}{suffix}</span>
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function Home() {
  const { theme, toggle } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const magnet = useMagnet(0.3)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800;900&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&display=swap');

        :root[data-theme="dark"] {
          --bg: #0A0A0B;
          --bg-secondary: #111113;
          --card: #111113;
          --card-hover: #161619;
          --text: #F5F5F0;
          --text-muted: #777780;
          --border: #222226;
          --accent: #E8E8E3;
          --accent-fg: #0A0A0B;
          --accent-text: #A8A8A3;
          --tag-bg: #18181C;
          --muted: #222226;
          --glow: rgba(200,200,255,0.12);
          --nav-bg: rgba(10,10,11,0.85);
        }

        :root[data-theme="light"] {
          --bg: #F7F6F3;
          --bg-secondary: #EFEDE8;
          --card: #FFFFFF;
          --card-hover: #F9F8F6;
          --text: #141412;
          --text-muted: #888882;
          --border: #E2E0DA;
          --accent: #141412;
          --accent-fg: #F7F6F3;
          --accent-text: #555550;
          --tag-bg: #F0EEE9;
          --muted: #E2E0DA;
          --glow: rgba(100,100,50,0.1);
          --nav-bg: rgba(247,246,243,0.85);
        }

        --font-display: 'Syne', sans-serif;
        --font-body: 'DM Sans', sans-serif;

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        html { scroll-behavior: smooth; }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
          transition: background 0.3s, color 0.3s;
        }

        a { color: inherit; text-decoration: none; }
        button { font-family: inherit; }

        ::selection { background: var(--accent); color: var(--accent-fg); }

        .section { padding: 96px 0; }
        .container { max-width: 1100px; margin: 0 auto; padding: 0 24px; }

        .fade-up {
          opacity: 0;
          transform: translateY(24px);
          animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        @keyframes fadeUp {
          to { opacity: 1; transform: none; }
        }

        .grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
        .grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }

        @media (max-width: 768px) {
          .grid-2 { grid-template-columns: 1fr; }
          .grid-4 { grid-template-columns: repeat(2, 1fr); }
          .hero-title { font-size: clamp(40px, 12vw, 80px) !important; }
          .hide-mobile { display: none !important; }
        }
        @media (max-width: 480px) {
          .grid-4 { grid-template-columns: 1fr 1fr; }
        }

        .divider {
          height: 1px;
          background: var(--border);
          margin: 0;
        }

        .pill-badge {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 6px 14px; border-radius: 999px;
          border: 1px solid var(--border);
          font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--text-muted); font-weight: 500;
          background: var(--card);
        }

        .cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 28px; border-radius: 12px;
          font-size: 14px; font-weight: 600; letter-spacing: 0.02em;
          cursor: pointer; transition: all 0.2s;
          border: none; font-family: 'DM Sans', sans-serif;
        }
        .cta-primary {
          background: var(--accent); color: var(--accent-fg);
        }
        .cta-primary:hover { opacity: 0.88; transform: translateY(-1px); }
        .cta-secondary {
          background: transparent;
          border: 1.5px solid var(--border);
          color: var(--text);
        }
        .cta-secondary:hover { border-color: var(--text-muted); transform: translateY(-1px); }

        .stat-num {
          font-family: 'Syne', sans-serif;
          font-size: 48px; font-weight: 900;
          color: var(--text); line-height: 1;
        }

        .marquee-wrap { overflow: hidden; white-space: nowrap; }
        .marquee-inner {
          display: inline-flex; gap: 48px;
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-item {
          font-family: 'Syne', sans-serif;
          font-size: 13px; font-weight: 700;
          letter-spacing: 0.15em; text-transform: uppercase;
          color: var(--text-muted);
          display: inline-flex; align-items: center; gap: 16px;
        }
        .marquee-dot { width: 4px; height: 4px; border-radius: 50%; background: var(--border); }

        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          transition: background 0.3s, backdrop-filter 0.3s, border-color 0.3s;
        }
        nav.scrolled {
          background: var(--nav-bg);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
        }
        .nav-inner {
          max-width: 1100px; margin: 0 auto; padding: 0 24px;
          height: 64px; display: flex; align-items: center; justify-content: space-between;
        }
        .nav-logo {
          font-family: 'Syne', sans-serif;
          font-size: 18px; font-weight: 800; letter-spacing: -0.02em;
          color: var(--text);
        }
        .nav-links { display: flex; align-items: center; gap: 8px; }
        .nav-link {
          padding: 6px 14px; border-radius: 8px; font-size: 14px;
          color: var(--text-muted); cursor: pointer; transition: all 0.2s;
          border: none; background: none; font-family: 'DM Sans', sans-serif;
          font-weight: 500;
        }
        .nav-link:hover { color: var(--text); background: var(--card); }

        .avail-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #4ADE80;
          animation: pulse-green 2s ease-in-out infinite;
        }
        @keyframes pulse-green {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .contact-link {
          font-size: 14px; color: var(--text-muted);
          transition: color 0.2s;
          display: inline-flex; align-items: center; gap: 6px;
        }
        .contact-link:hover { color: var(--text); }
      `}</style>

      <GlowCursor />

      {/* ── NAV ── */}
      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="nav-inner">
          <div className="nav-logo">HARIZALDY.</div>
          <div className="nav-links hide-mobile">
            {NAV_LINKS.map(l => (
              <button key={l} className="nav-link" onClick={() => {
                document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
              }}>{l}</button>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <ThemeToggle theme={theme} toggle={toggle} />
            <button
              className="cta-btn cta-primary hide-mobile"
              style={{ padding: '8px 18px', borderRadius: 8, fontSize: 13 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Hire Me
            </button>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 80 }}>
        <div className="container">
          <div style={{ marginBottom: 28, animationDelay: '0.1s' }} className="fade-up">
            <span className="pill-badge">
              <span className="avail-dot" />
              Available for Projects
            </span>
          </div>
          <h1
            className="hero-title fade-up"
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(52px, 8vw, 96px)',
              fontWeight: 900,
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
              color: 'var(--text)',
              marginBottom: 28,
              animationDelay: '0.15s',
            }}
          >
            Building<br />
            <span style={{ color: 'var(--text-muted)' }}>Digital Products</span><br />
            That Scale.
          </h1>
          <p
            className="fade-up"
            style={{
              maxWidth: 480, fontSize: 17, color: 'var(--text-muted)',
              lineHeight: 1.75, marginBottom: 40,
              animationDelay: '0.25s',
            }}
          >
            Full-stack developer specializing in Laravel, React/Next.js, and Express.js.
            I craft performant, maintainable web applications that solve real business problems.
          </p>
          <div className="fade-up" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', animationDelay: '0.35s' }}>
            <button
              className="cta-btn cta-primary"
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work ↓
            </button>
            <button
              className="cta-btn cta-secondary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
          color: 'var(--text-muted)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
        }}>
          <div style={{
            width: 1, height: 48,
            background: 'linear-gradient(to bottom, var(--border), transparent)',
            animation: 'fadeUp 1.5s ease infinite alternate',
          }} />
          Scroll
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '18px 0', overflow: 'hidden' }}>
        <div className="marquee-wrap">
          <div className="marquee-inner">
            {[...Array(2)].map((_, i) =>
              ['Laravel', 'React', 'Next.js', 'Express.js', 'TypeScript', 'MySQL', 'PostgreSQL', 'Redis', 'REST API', 'TailwindCSS'].map(s => (
                <span key={`${s}-${i}`} className="marquee-item">
                  {s} <span className="marquee-dot" />
                </span>
              ))
            )}
          </div>
        </div>
      </div>

      {/* ── STATS ── */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'var(--border)', borderRadius: 16, overflow: 'hidden' }}>
            {[
              { n: 30, suffix: '+', label: 'Projects Shipped' },
              { n: 3, suffix: '+', label: 'Years Experience' },
              { n: 100, suffix: '%', label: 'Client Satisfaction' },
            ].map((s, i) => (
              <div key={i} style={{
                background: 'var(--bg)',
                padding: '40px 32px',
                textAlign: 'center',
              }}>
                <div className="stat-num"><AnimatedCounter target={s.n} suffix={s.suffix} /></div>
                <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 8, letterSpacing: '0.06em' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── WORK ── */}
      <section id="work" className="section">
        <div className="container">
          <div style={{ marginBottom: 56 }}>
            <span className="pill-badge" style={{ marginBottom: 20, display: 'inline-flex' }}>Selected Work</span>
            <h2 style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 800, letterSpacing: '-0.025em',
              color: 'var(--text)', lineHeight: 1.15,
            }}>
              Projects that<br />move the needle.
            </h2>
          </div>
          <div className="grid-2">
            {PROJECTS.map((p, i) => <ProjectCard key={i} p={p} index={i} />)}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── STACK ── */}
      <section id="stack" className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ marginBottom: 48 }}>
            <span className="pill-badge" style={{ marginBottom: 20, display: 'inline-flex' }}>Tech Stack</span>
            <h2 style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 800, letterSpacing: '-0.025em',
              color: 'var(--text)', lineHeight: 1.15,
            }}>
              Tools I master.
            </h2>
          </div>
          <div className="grid-4">
            {STACKS.map(s => <StackCard key={s.name} item={s} />)}
          </div>
          <div style={{ marginTop: 48, padding: '28px 32px', borderRadius: 16, border: '1px solid var(--border)', background: 'var(--card)' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7 }}>
              <strong style={{ color: 'var(--text)', fontFamily: 'Syne, sans-serif' }}>Beyond the core stack</strong> — I also work with TypeScript, TailwindCSS, Docker, AWS (EC2, S3, RDS), Git workflows, CI/CD pipelines, REST & GraphQL APIs, Redis, and SQL/NoSQL databases. I prioritize clean architecture and long-term maintainability.
            </p>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── ABOUT ── */}
      <section id="about" className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <span className="pill-badge" style={{ marginBottom: 24, display: 'inline-flex' }}>About Me</span>
              <h2 style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 800, letterSpacing: '-0.025em',
                color: 'var(--text)', lineHeight: 1.2, marginBottom: 24,
              }}>
                I build systems,<br />not just websites.
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 16 }}>
                I'm a full-stack developer with a strong passion for building scalable, well-architected web applications. My approach bridges the gap between elegant frontend experiences and robust backend systems.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 32 }}>
                Whether it's a Laravel API serving millions of requests, a Next.js app with blazing SSR performance, or an Express microservice — I focus on delivering solutions that are built to last.
              </p>
              <div style={{ display: 'flex', gap: 12 }}>
                <button
                  className="cta-btn cta-primary"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Work With Me
                </button>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { icon: '⚡', title: 'Performance First', desc: 'Every line of code is written with speed and efficiency in mind.' },
                { icon: '🔒', title: 'Security Minded', desc: 'OWASP best practices and secure-by-default development.' },
                { icon: '♻️', title: 'Clean Architecture', desc: 'SOLID principles, DRY code, and maintainable systems.' },
                { icon: '🚀', title: 'Fast Delivery', desc: 'Agile workflow, clear communication, on-time delivery.' },
              ].map((v, i) => (
                <div key={i} style={{
                  padding: '20px 18px', borderRadius: 12,
                  border: '1px solid var(--border)', background: 'var(--card)',
                }}>
                  <div style={{ fontSize: 24, marginBottom: 10 }}>{v.icon}</div>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 14, marginBottom: 6, color: 'var(--text)' }}>{v.title}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.6 }}>{v.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── CONTACT ── */}
      <section id="contact" className="section">
        <div className="container" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
          <span className="pill-badge" style={{ marginBottom: 28, display: 'inline-flex' }}>Let's Talk</span>
          <h2 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(36px, 6vw, 64px)',
            fontWeight: 900, letterSpacing: '-0.03em',
            color: 'var(--text)', lineHeight: 1.1, marginBottom: 20,
          }}>
            Have a project<br />in mind?
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 16, lineHeight: 1.75, marginBottom: 40 }}>
            I'm currently open to new opportunities. Whether you have a project to discuss or just want to connect — my inbox is always open.
          </p>
          <div
            {...magnet}
            style={{ display: 'inline-block', marginBottom: 48 }}
          >
            <a
              href="mailto:hello@yourname.dev"
              className="cta-btn cta-primary"
              style={{ fontSize: 16, padding: '16px 36px', borderRadius: 14, transition: 'transform 0.15s ease' }}
            >
              hello@yourname.dev →
            </a>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
            {[
              { label: 'GitHub', href: '#' },
              { label: 'LinkedIn', href: '#' },
              { label: 'Twitter / X', href: '#' },
            ].map(s => (
              <a key={s.label} href={s.href} className="contact-link">
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: '1px solid var(--border)', padding: '28px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: 'var(--text-muted)', fontSize: 14 }}>YN. © 2025</div>
          <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>
            Built with Next.js & TailwindCSS
          </div>
        </div>
      </footer>
    </>
  )
}