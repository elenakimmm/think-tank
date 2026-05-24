'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Reveal } from '@/components/Reveal';
import { Placeholder } from '@/components/Placeholder';
import Link from 'next/link';

export default function ANailSchoolCase() {
  return (
    <>
      <Navigation />
      <main className="page-enter">
        {/* Hero Section */}
        <section className="page" style={{ padding: "100px 60px 60px" }}>
          <Reveal>
            <div style={{ maxWidth: 900 }}>
              <h1 style={{ fontSize: 'clamp(48px, 6vw, 88px)', fontWeight: 800, marginTop: 0, marginBottom: 40, lineHeight: 1.1 }}>
                A+ Nail School.
              </h1>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, maxWidth: 900 }}>
                <div>
                  <p style={{ fontSize: 16, color: '#666', lineHeight: 1.7, margin: 0 }}>
                    A+ Nail School partnered with us to revamp their digital presence and scale their education platform. What started as a branding challenge became a complete digital transformation.
                  </p>
                </div>
                <div>
                  <div style={{ marginBottom: 24 }}>
                    <p style={{ fontSize: 12, color: '#999', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, margin: '0 0 6px 0' }}>Trade School & Education</p>
                    <p style={{ fontSize: 14, color: '#666', margin: 0 }}>Nail technician training</p>
                  </div>
                  <div>
                    <p style={{ fontSize: 12, color: '#999', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, margin: '0 0 6px 0' }}>Scope of Work</p>
                    <p style={{ fontSize: 14, color: '#666', margin: 0 }}>Brand strategy, website redesign, enrollment platform</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <button className="btn btn-primary" style={{ marginTop: 40, padding: '14px 28px', fontSize: 14 }}>
              View their site <span className="arrow">→</span>
            </button>
          </Reveal>
        </section>

        {/* Three Transformations */}
        <section className="page section" style={{ padding: "80px 60px" }}>
          <Reveal>
            <div>
              <h2 style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 800, marginBottom: 60, lineHeight: 1.15 }}>
                Two years.<br />
                Three transformations.
              </h2>
            </div>
          </Reveal>

          <Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 80 }}>
              <div>
                <p style={{ fontSize: 'clamp(48px, 8vw, 72px)', fontWeight: 800, margin: '0 0 12px 0', lineHeight: 1 }}>
                  3<span style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}>x</span>
                </p>
                <p style={{ fontSize: 14, color: '#999', lineHeight: 1.6, margin: 0 }}>
                  Increase in qualified leads
                </p>
              </div>
              <div>
                <p style={{ fontSize: 'clamp(48px, 8vw, 72px)', fontWeight: 800, margin: '0 0 12px 0', lineHeight: 1 }}>
                  50<span style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}>x</span>
                </p>
                <p style={{ fontSize: 14, color: '#999', lineHeight: 1.6, margin: 0 }}>
                  Growth in email engagement
                </p>
              </div>
              <div>
                <p style={{ fontSize: 'clamp(48px, 8vw, 72px)', fontWeight: 800, margin: '0 0 12px 0', lineHeight: 1 }}>
                  13<span style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}>x</span>
                </p>
                <p style={{ fontSize: 14, color: '#999', lineHeight: 1.6, margin: 0 }}>
                  Improvement in student satisfaction scores
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* What We Walked Into */}
        <section className="page section" style={{ padding: "80px 60px" }}>
          <Reveal>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 800, marginBottom: 60, lineHeight: 1.15 }}>
              What we walked into.
            </h2>
          </Reveal>

          <Reveal>
            <div style={{ maxWidth: 700 }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ paddingBottom: 20, marginBottom: 20, borderBottom: '1px solid #eee', fontSize: 16, color: '#555', lineHeight: 1.6 }}>
                  Outdated website that didn't reflect their premium positioning
                </li>
                <li style={{ paddingBottom: 20, marginBottom: 20, borderBottom: '1px solid #eee', fontSize: 16, color: '#555', lineHeight: 1.6 }}>
                  Low enrollment rates despite having quality instruction
                </li>
                <li style={{ paddingBottom: 20, marginBottom: 20, borderBottom: '1px solid #eee', fontSize: 16, color: '#555', lineHeight: 1.6 }}>
                  No clear value proposition compared to competitors
                </li>
                <li style={{ paddingBottom: 20, marginBottom: 20, borderBottom: '1px solid #eee', fontSize: 16, color: '#555', lineHeight: 1.6 }}>
                  Fragmented student communication and experience
                </li>
                <li style={{ fontSize: 16, color: '#555', lineHeight: 1.6 }}>
                  Missing data on student outcomes and program ROI
                </li>
              </ul>
            </div>
          </Reveal>
        </section>

        {/* What We Built */}
        <section className="page section" style={{ padding: "80px 60px" }}>
          <Reveal>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 800, marginBottom: 60, lineHeight: 1.15 }}>
              What we built.
            </h2>
          </Reveal>

          <Reveal>
            <div style={{ maxWidth: 900 }}>
              {[
                { title: 'Complete rebrand', desc: 'Modern visual identity that reflects A+ Nail School\'s premium positioning and attracts quality students.' },
                { title: 'Website redesign', desc: 'User-focused site architecture that highlights program benefits, instructor expertise, and student success stories.' },
                { title: 'SEO strategy & paid acquisition', desc: 'Comprehensive keyword research and Google Ads campaigns that reached qualified prospective students.' },
                { title: 'Hubspot CRM & sales funnel', desc: 'Integrated enrollment automation that tracks student journey from awareness through enrollment.' }
              ].map((item, idx) => (
                <div key={idx} style={{ marginBottom: 40, paddingBottom: 40, borderBottom: idx < 3 ? '1px solid #eee' : 'none' }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 16px 0' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 16, color: '#666', lineHeight: 1.7, margin: 0, maxWidth: 700 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Image Gallery */}
        <section className="page section" style={{ padding: "80px 60px 0" }}>
          <Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, marginBottom: 40 }}>
              <div style={{ aspectRatio: '1.2', backgroundColor: '#f5ede6' }}>
                <Placeholder />
              </div>
              <div style={{ aspectRatio: '0.8', backgroundColor: '#f0f0f0' }}>
                <Placeholder />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
              <div style={{ aspectRatio: '1', backgroundColor: '#1a1a1a' }}>
                <Placeholder />
              </div>
              <div style={{ aspectRatio: '1', backgroundColor: '#f5f5f5' }}>
                <Placeholder />
              </div>
              <div style={{ aspectRatio: '1', backgroundColor: '#d4f949' }}>
                <Placeholder />
              </div>
            </div>
          </Reveal>
        </section>

        {/* Next Project */}
        <section className="page section" style={{ padding: "80px 60px 0" }}>
          <Reveal>
            <div style={{ paddingTop: 60, borderTop: '1px solid #eee', marginTop: 80 }}>
              <Link href="/works" style={{ textDecoration: 'none' }}>
                <h3 style={{ fontSize: 'clamp(28px, 3vw, 48px)', fontWeight: 800, color: '#1a1a1a', margin: 0, cursor: 'pointer', transition: 'color 0.3s ease', hover: { color: '#666' } }}>
                  Whitecap <span style={{ fontSize: 'clamp(20px, 2vw, 32px)' }}>→</span>
                </h3>
              </Link>
            </div>
          </Reveal>
        </section>

        {/* Clarity Section */}
        <section className="page section" style={{ padding: "80px 60px" }}>
          <Reveal>
            <div>
              <h2 style={{ fontSize: 'clamp(32px, 4vw, 64px)', fontWeight: 800, marginBottom: 20, lineHeight: 1.15 }}>
                Growth starts with clarity.
              </h2>
              <p style={{ fontSize: 16, color: '#999', maxWidth: 600, lineHeight: 1.6, marginBottom: 40, fontWeight: 400 }}>
                Let's build the system behind it.
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
