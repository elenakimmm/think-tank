'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Reveal } from '@/components/Reveal';
import { Placeholder } from '@/components/Placeholder';

export default function About() {
  return (
    <>
      <Navigation />
      <main className="page-enter">
        {/* Hero Section */}
        <section className="page" style={{ padding: "140px 60px 80px" }}>
          <Reveal>
            <div style={{ maxWidth: 900 }}>
              <h1 style={{ fontSize: 'clamp(40px, 5vw, 80px)', fontWeight: 800, marginTop: 0, lineHeight: 1.15, marginBottom: 40 }}>
                We design for a better today, because the future isn't some far-off dream.
              </h1>
              <p style={{ fontSize: 18, color: '#999', maxWidth: 500, lineHeight: 1.6 }}>
                It's bold to do so, yet so simple: new products is brand's future. it's time to set the foundation or something safe and memorable for years.
              </p>
            </div>
          </Reveal>
        </section>

        {/* The People Behind the Work */}
        <section className="page section" style={{ padding: "80px 60px" }}>
          <Reveal>
            <div style={{ marginBottom: 60 }}>
              <h2 style={{ fontSize: 'clamp(32px, 4vw, 64px)', fontWeight: 800, marginBottom: 10, lineHeight: 1.15 }}>
                The people behind the work.
              </h2>
              <p style={{ fontSize: 16, color: '#999', maxWidth: 500 }}>
                A small group with deep experience in strategic brand, growth and user experience design.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginBottom: 40 }}>
              <div>
                <div style={{ marginBottom: 16, aspectRatio: '1' }}>
                  <Placeholder />
                </div>
                <p style={{ fontSize: 14, fontWeight: 600, margin: 0 }}>John Johnson</p>
                <p style={{ fontSize: 12, color: '#999', margin: '4px 0 0 0' }}>Co-Founder</p>
              </div>
              <div>
                <div style={{ marginBottom: 16, aspectRatio: '1' }}>
                  <Placeholder />
                </div>
                <p style={{ fontSize: 14, fontWeight: 600, margin: 0 }}>Amy Lopez</p>
                <p style={{ fontSize: 12, color: '#999', margin: '4px 0 0 0' }}>Lead Designer</p>
              </div>
              <div>
                <div style={{ marginBottom: 16, aspectRatio: '1' }}>
                  <Placeholder />
                </div>
                <p style={{ fontSize: 14, fontWeight: 600, margin: 0 }}>Maria Davis</p>
                <p style={{ fontSize: 12, color: '#999', margin: '4px 0 0 0' }}>Strategy Director</p>
              </div>
              <div>
                <div style={{ marginBottom: 16, aspectRatio: '1' }}>
                  <Placeholder />
                </div>
                <p style={{ fontSize: 14, fontWeight: 600, margin: 0 }}>Chris Ryan</p>
                <p style={{ fontSize: 12, color: '#999', margin: '4px 0 0 0' }}>Development Lead</p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
              <div>
                <div style={{ marginBottom: 16, aspectRatio: '1' }}>
                  <Placeholder />
                </div>
                <p style={{ fontSize: 14, fontWeight: 600, margin: 0 }}>Jordan Park</p>
                <p style={{ fontSize: 12, color: '#999', margin: '4px 0 0 0' }}>Growth Strategist</p>
              </div>
              <div>
                <div style={{ marginBottom: 16, aspectRatio: '1' }}>
                  <Placeholder />
                </div>
                <p style={{ fontSize: 14, fontWeight: 600, margin: 0 }}>Rachel Torres</p>
                <p style={{ fontSize: 12, color: '#999', margin: '4px 0 0 0' }}>Content Lead</p>
              </div>
              <div>
                <div style={{ marginBottom: 16, aspectRatio: '1' }}>
                  <Placeholder />
                </div>
                <p style={{ fontSize: 14, fontWeight: 600, margin: 0 }}>Alex Kim</p>
                <p style={{ fontSize: 12, color: '#999', margin: '4px 0 0 0' }}>Design Systems</p>
              </div>
              <div>
                <div style={{ marginBottom: 16, aspectRatio: '1' }}>
                  <Placeholder />
                </div>
                <p style={{ fontSize: 14, fontWeight: 600, margin: 0 }}>Maya Patel</p>
                <p style={{ fontSize: 12, color: '#999', margin: '4px 0 0 0' }}>Project Manager</p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Growth Inhibitors */}
        <section className="page section" style={{ padding: "80px 60px" }}>
          <Reveal>
            <div style={{ maxWidth: 900 }}>
              <div className="label">STEP 01</div>
              <h2 style={{ fontSize: 'clamp(32px, 4vw, 64px)', fontWeight: 800, marginTop: 20, marginBottom: 60, lineHeight: 1.15 }}>
                Identify and eliminate your biggest growth inhibitors.
              </h2>
            </div>
          </Reveal>

          <Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 40 }}>
              <div>
                <p style={{ fontSize: 32, fontWeight: 800, color: '#ddd', margin: '0 0 16px 0' }}>01</p>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: '#666', margin: 0 }}>Identify core revenue or engagement blockers in your business model</p>
              </div>
              <div>
                <p style={{ fontSize: 32, fontWeight: 800, color: '#ddd', margin: '0 0 16px 0' }}>02</p>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: '#666', margin: 0 }}>Analyze which barriers are fixed vs. fixable in the next 6 months</p>
              </div>
              <div>
                <p style={{ fontSize: 32, fontWeight: 800, color: '#ddd', margin: '0 0 16px 0' }}>03</p>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: '#666', margin: 0 }}>Prioritize high-impact, low-cost wins first</p>
              </div>
              <div>
                <p style={{ fontSize: 32, fontWeight: 800, color: '#ddd', margin: '0 0 16px 0' }}>04</p>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: '#666', margin: 0 }}>Set clear benchmarks and measurement criteria</p>
              </div>
              <div>
                <p style={{ fontSize: 32, fontWeight: 800, color: '#ddd', margin: '0 0 16px 0' }}>05</p>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: '#666', margin: 0 }}>Roadmap implementation and quarterly reviews</p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Five Steps */}
        <section className="page section" style={{ padding: "80px 60px" }}>
          <Reveal>
            <div style={{ maxWidth: 900 }}>
              <div className="label">OUR PROCESS</div>
              <h2 style={{ fontSize: 'clamp(32px, 4vw, 64px)', fontWeight: 800, marginTop: 20, marginBottom: 60, lineHeight: 1.15 }}>
                Five steps, in order.
              </h2>
            </div>
          </Reveal>

          <Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 40 }}>
              {['Brand Positioning & Foundation', 'Digital Systems Alignment', 'Content Distribution Canvas', 'Sales Training & Lead Funnels', 'Revenue Growth Framework'].map((step, index) => (
                <div key={index}>
                  <p style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#999', marginBottom: 12, margin: 0 }}>
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Two Ways to Run an Agency */}
        <section className="page section" style={{ padding: "80px 60px" }}>
          <Reveal>
            <div style={{ maxWidth: 900, marginBottom: 60 }}>
              <div className="label">WHY WE'RE DIFFERENT</div>
              <h2 style={{ fontSize: 'clamp(32px, 4vw, 64px)', fontWeight: 800, marginTop: 20, lineHeight: 1.15 }}>
                Two ways to run an agency.
              </h2>
            </div>
          </Reveal>

          <Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, maxWidth: 900 }}>
              {/* TTC Column */}
              <div>
                <div style={{ marginBottom: 40 }}>
                  <p style={{ fontSize: 24, fontWeight: 800, margin: '0 0 8px 0' }}>TTC</p>
                  <p style={{ fontSize: 14, color: '#999', margin: 0 }}>Think Tank Consulting</p>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ display: 'flex', gap: 12, marginBottom: 20, alignItems: 'flex-start' }}>
                    <span style={{ color: '#F4A04B', fontSize: 18, fontWeight: 800, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: 14, lineHeight: 1.5, color: '#555' }}>We hire smart educators</span>
                  </li>
                  <li style={{ display: 'flex', gap: 12, marginBottom: 20, alignItems: 'flex-start' }}>
                    <span style={{ color: '#F4A04B', fontSize: 18, fontWeight: 800, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: 14, lineHeight: 1.5, color: '#555' }}>We measure organizational needs</span>
                  </li>
                  <li style={{ display: 'flex', gap: 12, marginBottom: 20, alignItems: 'flex-start' }}>
                    <span style={{ color: '#F4A04B', fontSize: 18, fontWeight: 800, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: 14, lineHeight: 1.5, color: '#555' }}>Build growth roadmaps</span>
                  </li>
                  <li style={{ display: 'flex', gap: 12, marginBottom: 20, alignItems: 'flex-start' }}>
                    <span style={{ color: '#F4A04B', fontSize: 18, fontWeight: 800, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: 14, lineHeight: 1.5, color: '#555' }}>Long-term partnership mindset</span>
                  </li>
                  <li style={{ display: 'flex', gap: 12, marginBottom: 20, alignItems: 'flex-start' }}>
                    <span style={{ color: '#F4A04B', fontSize: 18, fontWeight: 800, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: 14, lineHeight: 1.5, color: '#555' }}>Sales & marketing alignment</span>
                  </li>
                </ul>
              </div>

              {/* Typical Agencies Column */}
              <div>
                <div style={{ marginBottom: 40 }}>
                  <p style={{ fontSize: 24, fontWeight: 800, margin: '0 0 8px 0' }}>Typical Agencies</p>
                  <p style={{ fontSize: 14, color: '#999', margin: 0 }}>The Rest of the Market</p>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ display: 'flex', gap: 12, marginBottom: 20, alignItems: 'flex-start' }}>
                    <span style={{ color: '#999', fontSize: 16, flexShrink: 0 }}>—</span>
                    <span style={{ fontSize: 14, lineHeight: 1.5, color: '#ccc' }}>Smart contractors rather than strategists</span>
                  </li>
                  <li style={{ display: 'flex', gap: 12, marginBottom: 20, alignItems: 'flex-start' }}>
                    <span style={{ color: '#999', fontSize: 16, flexShrink: 0 }}>—</span>
                    <span style={{ fontSize: 14, lineHeight: 1.5, color: '#ccc' }}>Project budgets, not strategic resourcing</span>
                  </li>
                  <li style={{ display: 'flex', gap: 12, marginBottom: 20, alignItems: 'flex-start' }}>
                    <span style={{ color: '#999', fontSize: 16, flexShrink: 0 }}>—</span>
                    <span style={{ fontSize: 14, lineHeight: 1.5, color: '#ccc' }}>Short-term tactical outputs</span>
                  </li>
                  <li style={{ display: 'flex', gap: 12, marginBottom: 20, alignItems: 'flex-start' }}>
                    <span style={{ color: '#999', fontSize: 16, flexShrink: 0 }}>—</span>
                    <span style={{ fontSize: 14, lineHeight: 1.5, color: '#ccc' }}>Siloed dependencies on contractors</span>
                  </li>
                  <li style={{ display: 'flex', gap: 12, marginBottom: 20, alignItems: 'flex-start' }}>
                    <span style={{ color: '#999', fontSize: 16, flexShrink: 0 }}>—</span>
                    <span style={{ fontSize: 14, lineHeight: 1.5, color: '#ccc' }}>No growth coaching or unification</span>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Infrastructure Section */}
        <section className="page section" style={{ padding: "80px 60px" }}>
          <Reveal>
            <div style={{ maxWidth: 900 }}>
              <p style={{ fontSize: 18, color: '#999', marginBottom: 20, margin: 0 }}>WE DELIVER VALUE</p>
              <h2 style={{ fontSize: 'clamp(40px, 5vw, 80px)', fontWeight: 800, lineHeight: 1.15 }}>
                We don't sell decks. <br />
                We build the <span style={{ backgroundColor: '#FFEB3B', padding: '0 8px', fontWeight: 900 }}>infrastructure growth</span> runs on.
              </h2>
            </div>
          </Reveal>
        </section>

        {/* Clarity Section */}
        <section className="page section" style={{ padding: "80px 60px" }}>
          <Reveal>
            <div>
              <h2 style={{ fontSize: 'clamp(32px, 4vw, 64px)', fontWeight: 800, marginBottom: 40, lineHeight: 1.15 }}>
                Growth starts with clarity.
              </h2>
              <p style={{ fontSize: 16, color: '#999', maxWidth: 600, lineHeight: 1.8, marginBottom: 40 }}>
                Let's build the system behind your growth. Unify your teams, define your positioning, and create a scalable revenue engine that works.
              </p>
              <button className="btn btn-primary" style={{ padding: '14px 28px', fontSize: 14 }}>
                Start your growth audit <span className="arrow">→</span>
              </button>
            </div>
          </Reveal>
        </section>

        <Footer />
      </main>
    </>
  );
}
