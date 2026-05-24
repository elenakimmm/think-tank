'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Reveal } from '@/components/Reveal';

export default function About() {
  return (
    <>
      <Navigation />
      <main className="page-enter">
        <section className="page" style={{ padding: "140px 60px 80px" }}>
          <Reveal>
            <div style={{ maxWidth: 900 }}>
              <div className="label">About Think Tank</div>
              <h1 style={{ fontSize: 'clamp(40px, 5vw, 80px)', fontWeight: 800, marginTop: 20, lineHeight: 1.15 }}>
                We help brands and businesses scale sustainably.
              </h1>
            </div>
          </Reveal>
        </section>

        <section className="page section" style={{ padding: "80px 60px" }}>
          <Reveal>
            <div style={{ maxWidth: 800, lineHeight: 1.8, fontSize: 17, color: '#555' }}>
              <p style={{ marginBottom: 24 }}>
                Think Tank Consulting is an integrated growth partner specializing in brand development,
                digital systems, and revenue optimization. We work with education institutions, healthcare
                providers, nonprofits, and growing businesses to build sustainable success.
              </p>
              <p style={{ marginBottom: 24 }}>
                Our approach combines strategic planning with tactical execution. We don't just advise —
                we implement. From branding to WordPress development, SEO optimization to HubSpot integration,
                we handle the full spectrum of digital growth.
              </p>
              <p>
                Our clients have seen 3-40x growth, viral content, and sustainable revenue increases.
                We measure everything and focus on what actually works.
              </p>
            </div>
          </Reveal>
        </section>

        <Footer />
      </main>
    </>
  );
}
