/* global React */
const { useEffect, useRef, useState } = React;

/* ============================================================
   Abstract organic shapes
   ============================================================ */
function HeroShapes() {
  return (
    <div className="shapes" aria-hidden="true">
      <div className="shape shape-1">
        <svg width="120" height="60" viewBox="0 0 120 60">
          <ellipse cx="30" cy="30" rx="28" ry="26" fill="var(--coral)" />
          <ellipse cx="82" cy="32" rx="18" ry="16" fill="var(--coral)" />
        </svg>
      </div>
      <div className="shape shape-2">
        <svg width="100" height="50" viewBox="0 0 100 50">
          <ellipse cx="28" cy="25" rx="24" ry="22" fill="var(--sand)" />
          <ellipse cx="68" cy="26" rx="16" ry="14" fill="var(--sand)" />
        </svg>
      </div>
      <div className="shape shape-3">
        <svg width="80" height="100" viewBox="0 0 80 100">
          <ellipse cx="40" cy="40" rx="28" ry="32" fill="var(--accent)" />
          <ellipse cx="38" cy="80" rx="14" ry="12" fill="var(--accent)" />
        </svg>
      </div>
    </div>);

}

/* ============================================================
   Striped placeholder for project imagery
   ============================================================ */
function Placeholder({ label, tone = 'light', ratio }) {
  const tones = {
    light: { bg: '#f4f4f4', stripe: '#e7e7e7', text: '#888' },
    dark: { bg: '#1a1a1a', stripe: '#252525', text: '#888' },
    warm: { bg: '#f6efe7', stripe: '#ede2d3', text: '#9a8c75' },
    sand: { bg: '#efece5', stripe: '#e3dfd3', text: '#8e8675' },
    lime: { bg: 'oklch(0.95 0.12 115)', stripe: 'oklch(0.92 0.18 115)', text: '#3a4a18' }
  };
  const t = tones[tone] || tones.light;
  const style = ratio ? { aspectRatio: ratio } : {};
  return (
    <div style={{
      width: '100%', height: '100%',
      background: `repeating-linear-gradient(135deg, ${t.bg} 0 16px, ${t.stripe} 16px 17px)`,
      display: 'grid', placeItems: 'center', position: 'relative', ...style
    }}>
      <div style={{
        position: 'absolute', bottom: 14, left: 14,
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase',
        color: t.text, background: t.bg, padding: '4px 8px'
      }}>
        {label}
      </div>
    </div>);

}

/* ============================================================
   Reveal on scroll
   ============================================================ */
function Reveal({ children, delay = 0, as = 'div', className = '', ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as;
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}>
      
      {children}
    </Tag>);

}

/* ============================================================
   Navigation — editorial white
   ============================================================ */
function Nav({ route, go }) {
  const items = [
  { id: 'about', label: 'Our Story' },
  { id: 'works', label: 'Our Projects' },
  { id: 'contact', label: 'Contact' }];

  return (
    <nav className="nav">
      <div className="nav-inner" style={{ padding: "18px 60px" }}>
        <a className="brand" onClick={(e) => {e.preventDefault();go('home');}} href="#"
        aria-label="Think Tank — home">
          <img src="assets/logo.png" alt="Think Tank" className="brand-logo" />
        </a>
        <div className="nav-links">
          {items.map((it) =>
          <button
            key={it.id}
            className={route === it.id || it.id === 'works' && route.startsWith('case') ? 'active' : ''}
            onClick={() => go(it.id)}>
            
              {it.label}
            </button>
          )}
        </div>
        <button className="nav-cta" onClick={() => go('contact')}>
          Get Started →
        </button>
      </div>
    </nav>);

}

/* ============================================================
   Footer — editorial white
   ============================================================ */
function Footer({ go }) {
  return (
    <footer className="footer page">
      <Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 40, paddingBottom: 80, alignItems: 'start' }}>
          <div className="footer-headline">
            Growth starts with clarity.
            <br />
            <span style={{ color: '#b8b8b8' }}>Let's build the system behind it.</span>
          </div>
          <button onClick={() => go('contact')} className="btn btn-primary"
          style={{ justifySelf: 'end', padding: '18px 28px', fontSize: 14 }}>
            Start your project <span className="arrow">→</span>
          </button>
        </div>
      </Reveal>
      <div className="footer-grid">
        <div>
          <a className="brand" href="#" aria-label="Think Tank">
            <img src="assets/logo.png" alt="Think Tank" className="brand-logo brand-logo-lg" />
          </a>
          <p style={{ marginTop: 20, fontSize: 13, color: '#555', maxWidth: 320, lineHeight: 1.5 }}>
            Your integrated growth partner for organic & paid performance —
            from marketing strategy to MarTech implementation.
          </p>
        </div>
        <div>
          <h5>Company</h5>
          <ul>
            <li><a onClick={() => go('about')} href="#">Our Story</a></li>
            <li><a onClick={() => go('works')} href="#">Projects</a></li>
            <li><a onClick={() => go('contact')} href="#">Contact</a></li>
          </ul>
        </div>
        <div>
          <h5>Newsletter</h5>
          <div style={{ display: 'flex', gap: 0, marginTop: 4 }}>
            <input
              type="email"
              placeholder="Email"
              style={{
                flex: 1, border: '1px solid #eaeaea', borderRight: 0,
                padding: '10px 12px', fontSize: 13, outline: 'none',
                background: '#fafafa'
              }} />
            
            <button style={{
              background: '#111', color: '#fff',
              padding: '10px 16px', fontSize: 13, fontWeight: 500
            }}>
              Subscribe
            </button>
          </div>
        </div>
        <div>
          <h5>Follow</h5>
          <ul>
            <li><a href="#">LinkedIn ↗</a></li>
            <li><a href="#">Instagram ↗</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 Think Tank Consulting, LLC. All rights reserved.</span>
        <span>
          <a href="#" style={{ marginRight: 20 }}>Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </span>
      </div>
    </footer>);

}

Object.assign(window, { HeroShapes, Placeholder, Reveal, Nav, Footer });
