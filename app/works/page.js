'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Reveal } from '@/components/Reveal';

export default function Works() {
  return (
    <>
      <Navigation />
      <main className="page-enter">
        <section className="page" style={{ padding: "140px 60px 80px" }}>
          <Reveal>
            <div style={{ maxWidth: 900 }}>
              <div className="label">Our Work</div>
              <h1 style={{ fontSize: 'clamp(40px, 5vw, 80px)', fontWeight: 800, marginTop: 20, lineHeight: 1.15 }}>
                Case studies & results.
              </h1>
            </div>
          </Reveal>
        </section>

        <section className="page section" style={{ padding: "80px 60px" }}>
          <Reveal>
            <p style={{ fontSize: 18, color: '#666', lineHeight: 1.8, maxWidth: 700 }}>
              Our case studies showcase real brands, real challenges, and real results.
              From 7x traffic increases to 40x growth, we've helped our clients succeed across
              education, healthcare, nonprofits, and beyond. Explore our project gallery on the home page.
            </p>
          </Reveal>
        </section>

        <Footer />
      </main>
    </>
  );
}
