'use client';

import { useRouter } from 'next/navigation';
import { Reveal } from './Reveal';

export function Footer() {
  const router = useRouter();

  return (
    <footer className="footer page">
      <Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 40, paddingBottom: 80, alignItems: 'start' }}>
          <div className="footer-headline">
            Growth starts with clarity.
            <br />
            <span style={{ color: '#b8b8b8' }}>Let's build the system behind it.</span>
          </div>
          <button
            onClick={() => router.push('/contact')}
            className="btn btn-primary"
            style={{ justifySelf: 'end', padding: '18px 28px', fontSize: 14 }}
          >
            Start your project <span className="arrow">→</span>
          </button>
        </div>
      </Reveal>
      <div className="footer-grid">
        <div>
          <button className="brand" onClick={() => router.push('/')} aria-label="Think Tank">
            <img src="/assets/logo.png" alt="Think Tank" className="brand-logo brand-logo-lg" />
          </button>
          <p style={{ marginTop: 20, fontSize: 13, color: '#555', maxWidth: 320, lineHeight: 1.5 }}>
            Your integrated growth partner for organic & paid performance —
            from marketing strategy to MarTech implementation.
          </p>
        </div>
        <div>
          <h5>Company</h5>
          <ul>
            <li><a onClick={() => router.push('/about')} href="#" style={{ cursor: 'pointer' }}>Our Story</a></li>
            <li><a onClick={() => router.push('/works')} href="#" style={{ cursor: 'pointer' }}>Projects</a></li>
            <li><a onClick={() => router.push('/contact')} href="#" style={{ cursor: 'pointer' }}>Contact</a></li>
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
              }}
            />
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
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram ↗</a></li>
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
    </footer>
  );
}
