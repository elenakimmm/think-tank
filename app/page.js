'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Reveal } from '@/components/Reveal';
import { Placeholder } from '@/components/Placeholder';

// Data
const DISCIPLINES = [
  {
    n: '01',
    title: 'Strategy',
    items: ['Business Management', 'Brand Positioning', 'Rebranding', 'Operations Management', 'Market Intelligence', 'Go-To-Market Strategy']
  },
  {
    n: '02',
    title: 'Website Design & Development',
    items: ['Brand Optimization', 'Website Development', 'E-commerce Operation', 'SEO & AI Optimization', 'CRM Implementation']
  },
  {
    n: '03',
    title: 'Technology',
    items: ['WordPress, Shopify', 'HubSpot, Salesforce', 'SEMrush, Google Analytics']
  },
  {
    n: '04',
    title: 'Industries',
    items: ['Education', 'Healthcare', 'Legal', 'Wellness & Outdoor']
  }
];

const CLIENT_CASES = [
  {
    id: 'abs',
    name: 'ABS French School',
    cat: 'Education',
    tone: 'lime',
    image: '/uploads/abs-screen.png',
    headline: 'Au Beau Séjour — French Preschool',
    problems: ['Outdated website', 'Never done marketing'],
    solutions: ['Branding + WordPress website with SEO', 'SEO Blog + Email + Paid Ads', 'HubSpot implementation'],
    results: ['60% increase year-over-year', '7× traffic increase']
  },
  {
    id: 'whitecap',
    name: 'WhiteCap Institute',
    cat: 'Dental Education & E-commerce',
    tone: 'sand',
    image: '/uploads/whitecap-screen.png',
    headline: 'Premier Dental Implant Training',
    problems: ['B2B Inbound funnel is weak', 'Website is outdated', 'Branding is old', 'Hard to generate organic leads and manage effectively'],
    solutions: ['Inbound marketing via HubSpot', 'Full funnel campaign — Paid Ads, Email Marketing, SMS Marketing, SEO Blog'],
    results: ['Increased traffic instantly', 'Improved site authority', 'Generated more revenue']
  },
  {
    id: 'aplus',
    name: 'A+ Nail School',
    cat: 'Trade School & Education',
    tone: 'dark',
    image: '/uploads/aplus-screen.png',
    headline: 'Polished for Success — Your Nail Tech Journey',
    problems: ['Outdated website', 'No structured marketing activities'],
    solutions: ['Branding refresh', 'WordPress website redevelopment', 'SEO optimization', 'Paid advertising campaigns', 'HubSpot training and implementation'],
    results: ['3× revenue growth in 2 years', '40× traffic increase', '15× sign-up increase']
  },
  {
    id: 'hrnk',
    name: 'HRNK',
    cat: 'Non-Profit Organization',
    tone: 'light',
    image: '/uploads/hrnk-screen.png',
    headline: 'Support Human Rights in North Korea',
    problems: ['Outdated website', 'Existing contents lacked on-page SEO'],
    solutions: ['Website migration to WordPress', 'SEO implementation', 'Existing content updates and optimization'],
    results: ['20× traffic growth', 'Content referenced by Wikipedia', 'Increased awareness leading to United Nations speaking invitation']
  },
  {
    id: 'organic',
    name: 'Organic Authority',
    cat: 'Media',
    tone: 'lime',
    image: '/uploads/organic-screen.png',
    headline: 'The Better Food, Health & Wellness Authority',
    problems: [],
    solutions: ['Branding', 'WordPress website', 'SEO + SEO blog operation', 'Email marketing', 'Paid ads', 'HubSpot integration'],
    results: ['60% Year-over-Year growth', '7× traffic increase']
  },
  {
    id: 'hawaii',
    name: 'Hawaii Elite Chiropractic',
    cat: 'Healthcare Provider',
    tone: 'warm',
    image: '/uploads/hawaii-screen.png',
    headline: 'Where Healing Meets Aloha',
    problems: ['Website migration required', 'CRM implementation with HIPAA compliance needed'],
    solutions: ['Branding', 'WordPress website', 'SEO', 'Paid ads', 'Sales training'],
    results: ['Revenue increased by 30% YoY across both clinics', 'Increased number of doctors', 'Improved patient sign-ups']
  }
];

const CLIENT_LOGOS = [
  { name: 'AIMMO', src: '/uploads/aimmo.svg' },
  { name: 'Organic Authority', src: '/uploads/organic-authority.svg' },
  { name: 'A+ Nail School', src: '/uploads/aplus-nail-school.svg' },
  { name: 'WhiteCap Institute', src: '/uploads/whitecap-institute.svg' },
  { name: 'HRNK', src: '/uploads/hrnk.svg' },
  { name: 'WorkOnward', src: '/uploads/workonward.svg' },
  { name: 'boreas', src: '/uploads/boreas.svg' },
  { name: 'HEIMPLANET', src: '/uploads/heimplanet.svg' },
  { name: 'ORU KAYAK', src: '/uploads/oru-kayak.svg' }
];

function ClientScreenMock({ tone, headline, name, image }) {
  if (image) {
    return (
      <div className="cs-browser">
        <div className="bar"><i></i><i></i><i></i></div>
        <div className="body" style={{ padding: 0 }}>
          <img
            src={image}
            alt={name}
            style={{
              width: '100%',
              height: '100%',
              objectPosition: 'top center',
              display: 'block',
              objectFit: 'cover'
            }}
          />
        </div>
      </div>
    );
  }

  const tones = {
    sand: { bg: '#efece5', accent: '#3a3328' },
    warm: { bg: '#f6efe7', accent: '#3a2e23' },
    light: { bg: '#f4f4f4', accent: '#1f2937' },
    dark: { bg: '#0a0a0a', accent: '#fbbf24' },
    lime: { bg: 'oklch(0.95 0.12 115)', accent: '#1f2a14' }
  };
  const t = tones[tone] || tones.light;

  return (
    <div className="cs-browser">
      <div className="bar"><i></i><i></i><i></i></div>
      <div className="body" style={{ background: t.bg, color: t.accent }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28, opacity: 0.7 }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            {name}
          </div>
          <div style={{ display: 'flex', gap: 12, fontSize: 9, opacity: 0.7 }}>
            <span>Menu</span><span>About</span><span>Contact</span>
          </div>
        </div>
        <div style={{ fontSize: 'clamp(16px, 2vw, 24px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.05, maxWidth: '80%', marginBottom: 18 }}>
          {headline}
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={{ padding: '7px 14px', borderRadius: 4, background: t.accent, color: t.bg, fontSize: 10, fontWeight: 600 }}>
            Get Started
          </div>
          <div style={{ padding: '7px 14px', borderRadius: 4, border: `1px solid ${t.accent}`, opacity: 0.6, fontSize: 10, fontWeight: 600 }}>
            Learn More
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const router = useRouter();
  const [activeClient, setActiveClient] = useState(CLIENT_CASES[0].id);
  const client = CLIENT_CASES.find((c) => c.id === activeClient) || CLIENT_CASES[0];

  return (
    <>
      <Navigation />
      <main className="page-enter">
        {/* ================ HERO ================ */}
        <section className="page hero" style={{ padding: "0px 60px 102px" }}>
          <div>
            <div className="hero-animation">
              <iframe
                src="animation/Kinetic Hero.html"
                title="Marketing Agency for scaling business"
                loading="lazy"
                frameBorder="0"
                scrolling="no"
              />
            </div>

            <p className="hero-subtext">
              From Digital Marketing Strategy to MarTech Implementation —
              your integrated growth partner for organic & paid performance.
            </p>
            <div className="hero-ctas">
              <button className="btn btn-primary" onClick={() => router.push('/contact')}>
                Get Free Quote <span className="arrow">→</span>
              </button>
              <button className="btn btn-ghost" onClick={() => router.push('/works')}>
                View case results <span className="arrow">→</span>
              </button>
            </div>
          </div>
        </section>

        {/* ================ WHAT WE DO ================ */}
        <section className="page section" id="what" style={{ padding: "122px 60px" }}>
          <Reveal>
            <div className="section-head">
              <div>
                <div className="label">01 — What we do</div>
                <h2 style={{ marginTop: 22 }}>
                  Four disciplines,<br />one growth engine.
                </h2>
              </div>
              <p className="right">
                Paid Media, PR, Social Media Management, Influencer Marketing —
                integrated under a single strategic plan.
              </p>
            </div>
          </Reveal>

          <div className="disc-grid">
            {DISCIPLINES.map((d, i) => (
              <Reveal key={d.title} delay={i * 70} className="disc-cell">
                <span className="num">{d.n} / 04</span>
                <h3>{d.title}</h3>
                <ul>
                  {d.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ================ CLIENT RESULTS ================ */}
        <section className="page section" style={{ padding: "122px 60px" }}>
          <Reveal>
            <div className="section-head">
              <div>
                <div className="label">02 — Client results</div>
                <h2 style={{ marginTop: 22 }}>
                  Selected work,<br />measurable outcomes.
                </h2>
              </div>
              <p className="right">
                Click any project to see the problem, solution, and the numbers
                behind the engagement.
              </p>
            </div>
          </Reveal>

          <div className="client-tabs" style={{ textAlign: "center", margin: "0px 0px 40px" }}>
            {CLIENT_CASES.map((c) => (
              <button
                key={c.id}
                className={`client-tab ${activeClient === c.id ? 'active' : ''}`}
                onClick={() => setActiveClient(c.id)}
              >
                {c.name}
              </button>
            ))}
          </div>

          <div className="client-content" key={activeClient}>
            <div className="client-screen">
              <ClientScreenMock
                tone={client.tone}
                headline={client.headline}
                name={client.name}
                image={client.image}
              />
            </div>

            <div className="client-detail">
              <div className="cat">{client.cat}</div>
              <h3>{client.name}</h3>
              <a className="visit" href="#" onClick={(e) => e.preventDefault()}>
                Visit website <span>↗</span>
              </a>

              {client.problems.length > 0 && (
                <div className="client-block">
                  <h4>Problem</h4>
                  <ul>
                    {client.problems.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>
              )}

              <div className="client-block">
                <h4>Solution</h4>
                <ul>
                  {client.solutions.map((s) => <li key={s}>{s}</li>)}
                </ul>
              </div>

              <div className="client-block results">
                <h4>Results</h4>
                <ul>
                  {client.results.map((r) => <li key={r}>{r}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ================ OUR CLIENTS + TESTIMONIAL ================ */}
        <section className="page section" style={{ padding: "122px 60px" }}>
          <Reveal>
            <div style={{ textAlign: 'center', maxWidth: 1200, margin: '0 auto 64px' }}>
              <div className="label" style={{ marginBottom: 28 }}>03 — Our clients</div>
              <h2 style={{
                fontSize: 'clamp(40px, 5.4vw, 80px)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.0,
                textTransform: 'uppercase',
                textWrap: 'balance'
              }}>
                Marketing agency<br />
                for <span className="accent-line" style={{
                  background: 'var(--accent)',
                  padding: '0 0.1em 0.04em',
                  margin: '0 -0.04em'
                }}>scaling</span><br />
                business.
              </h2>
            </div>
          </Reveal>

          <div className="client-marquee">
            <div className="client-marquee-track">
              {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((l, i) => (
                <div key={i} className="client-marquee-cell">
                  <img src={l.src} alt={l.name} title={l.name} />
                </div>
              ))}
            </div>
          </div>

          <Reveal>
            <div className="testimonial" style={{ marginTop: 120 }}>
              <p className="testimonial-quote">
                <span className="qmark">"</span>Think Tank Consulting helped us navigate the
                complexities of entering the APAC market. Their cultural intelligence
                and strategic approach made all the difference in our global expansion.<span className="qmark">"</span>
              </p>
              <div className="testimonial-attr">
                <div className="testimonial-avatar"></div>
                <div className="testimonial-meta">
                  <div className="who">CEO, Oru Kayak</div>
                  <div className="what">Outdoor & Recreation</div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ================ WORKSHOPS ================ */}
        <section className="page section" style={{ padding: "122px 60px" }}>
          <div className="workshops">
            <Reveal className="workshops-text">
              <div className="label">04 — Workshops</div>
              <h2 style={{ marginTop: 22 }}>
                Workshops<br />& Event Sessions
              </h2>
              <p>
                From private community workshops to public seminars, every session
                is built around actionable frameworks and real case breakdowns.
              </p>
              <div className="workshops-cta">
                <button className="btn btn-ghost">
                  View details <span className="arrow">→</span>
                </button>
              </div>
            </Reveal>

            <Reveal className="workshops-grid">
              <div className="workshop-cell"><Placeholder label="Workshop · 01" tone="sand" /></div>
              <div className="workshop-cell"><Placeholder label="Workshop · 02" tone="warm" /></div>
              <div className="workshop-cell"><Placeholder label="Workshop · 03" tone="lime" /></div>
              <div className="workshop-cell"><Placeholder label="Workshop · 04" tone="light" /></div>
            </Reveal>
          </div>
        </section>

        {/* ================ COMMUNITY ================ */}
        <section className="page section" style={{ padding: "151px 60px", borderWidth: "1px 0px" }}>
          <div className="community">
            <Reveal className="community-text">
              <div className="label">Limited seats — 2026 cohort</div>
              <h2 style={{ marginTop: 22, lineHeight: "1.25" }}>
                Build marketing<br />
                that <span className="hl">actually works.</span>
              </h2>
              <ul>
                <li><span className="dot"></span>Growth experiments & shared insights</li>
                <li><span className="dot"></span>Performance measurement systems</li>
                <li><span className="dot"></span>Curated access for experienced marketers</li>
              </ul>
            </Reveal>

            <Reveal className="community-card">
              <div className="label" style={{ marginBottom: 14 }}>Why this community works</div>
              <h3>Stop guessing.<br />Start proving.</h3>
              <p>
                Marketing is full of noise. We focus on clarity, measurable
                growth, and honest experimentation.
              </p>
              <div className="punch">
                A peer group of operators, not theorists.
              </div>
              <button className="btn" onClick={() => router.push('/contact')}>
                Request access <span className="arrow">→</span>
              </button>
            </Reveal>
          </div>
        </section>

        {/* ================ FINALE ================ */}
        <section className="page finale">
          <Reveal>
            <h2 style={{ lineHeight: "1.25" }}>
              Scalability is not luck.<br />
              It's <span className="hl">architecture.</span>
            </h2>
            <p>
              Stop growth leaks and get an expert for proven results.
              Let's build sustainable success together.
            </p>
            <div className="cta">
              <button className="btn btn-primary" onClick={() => router.push('/contact')} style={{ padding: '18px 32px', fontSize: 15 }}>
                Get started today <span className="arrow">→</span>
              </button>
            </div>
          </Reveal>
        </section>

        <Footer />
      </main>
    </>
  );
}
