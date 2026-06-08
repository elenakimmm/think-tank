/* global React, HeroShapes, Placeholder, Reveal */
const { useState: useStateL } = React;

/* ============================================================
   Data
   ============================================================ */
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
}];


const CLIENT_CASES = [
{
  id: 'abs',
  name: 'ABS French School',
  cat: 'Education',
  tone: 'lime',
  image: 'assets/clients/abs-screen.png',
  headline: 'Au Beau Séjour — French Preschool',
  problems: [
  'Outdated website',
  'Never done marketing'],

  solutions: [
  'Branding + WordPress website with SEO',
  'SEO Blog + Email + Paid Ads',
  'HubSpot implementation'],

  results: [
  '60% increase year-over-year',
  '7× traffic increase']

},
{
  id: 'whitecap',
  name: 'WhiteCap Institute',
  cat: 'Dental Education & E-commerce',
  tone: 'sand',
  image: 'assets/clients/whitecap-screen.png',
  headline: 'Premier Dental Implant Training',
  problems: [
  'B2B Inbound funnel is weak',
  'Website is outdated',
  'Branding is old',
  'Hard to generate organic leads and manage effectively'],

  solutions: [
  'Inbound marketing via HubSpot',
  'Full funnel campaign — Paid Ads, Email Marketing, SMS Marketing, SEO Blog'],

  results: [
  'Increased traffic instantly',
  'Improved site authority',
  'Generated more revenue']

},
{
  id: 'aplus',
  name: 'A+ Nail School',
  cat: 'Trade School & Education',
  tone: 'dark',
  image: 'assets/clients/aplus-screen.png',
  headline: 'Polished for Success — Your Nail Tech Journey',
  problems: ['Outdated website', 'No structured marketing activities'],
  solutions: [
  'Branding refresh',
  'WordPress website redevelopment',
  'SEO optimization',
  'Paid advertising campaigns',
  'HubSpot training and implementation'],

  results: [
  '3× revenue growth in 2 years',
  '40× traffic increase',
  '15× sign-up increase']

},
{
  id: 'hrnk',
  name: 'HRNK',
  cat: 'Non-Profit Organization',
  tone: 'light',
  image: 'assets/clients/hrnk-screen.png',
  headline: 'Support Human Rights in North Korea',
  problems: ['Outdated website', 'Existing contents lacked on-page SEO'],
  solutions: [
  'Website migration to WordPress',
  'SEO implementation',
  'Existing content updates and optimization'],

  results: [
  '20× traffic growth',
  'Content referenced by Wikipedia',
  'Increased awareness leading to United Nations speaking invitation']

},
{
  id: 'organic',
  name: 'Organic Authority',
  cat: 'Media',
  tone: 'lime',
  image: 'assets/clients/organic-screen.png',
  headline: 'The Better Food, Health & Wellness Authority',
  problems: [],
  solutions: [
  'Branding',
  'WordPress website',
  'SEO + SEO blog operation',
  'Email marketing',
  'Paid ads',
  'HubSpot integration'],

  results: [
  '60% Year-over-Year growth',
  '7× traffic increase']

},
{
  id: 'hawaii',
  name: 'Hawaii Elite Chiropractic',
  cat: 'Healthcare Provider',
  tone: 'warm',
  image: 'assets/clients/hawaii-screen.png',
  headline: 'Where Healing Meets Aloha',
  problems: ['Website migration required', 'CRM implementation with HIPAA compliance needed'],
  solutions: ['Branding', 'WordPress website', 'SEO', 'Paid ads', 'Sales training'],
  results: [
  'Revenue increased by 30% YoY across both clinics',
  'Increased number of doctors',
  'Improved patient sign-ups']

},
{
  id: 'sta',
  name: 'Straight Talk Advisor',
  cat: 'Executive Advisory & Consulting',
  tone: 'sand',
  image: 'assets/clients/sta-case-hero.jpg',
  headline: 'Executive coaching with proven playbooks',
  problems: ['New advisory brand needed immediate executive trust', 'Offer needed to speak clearly to consumer-product CEOs and COOs'],
  solutions: ['Positioning around hands-on mentorship', 'Waitlist and book-a-call funnel', 'Service architecture for strategy, operations, manufacturing, and workshops'],
  results: ['15+ years operator credibility', '$120M revenue scale story', '20% profit benchmark']
}];


const CLIENT_LOGOS = [
{ name: 'WorkOnward', src: 'assets/clients/workonward.png' },
{ name: 'AIMMO', src: 'assets/clients/aimmo.png' },
{ name: 'boreas', src: 'assets/clients/boreas.png' },
{ name: 'HEIMPLANET', src: 'assets/clients/heimplanet.png' },
{ name: 'ORU KAYAK', src: 'assets/clients/oru-kayak.png' },
{ name: 'Organic Authority', src: 'assets/clients/organic-authority.png' },
{ name: 'DIOnavi', src: 'assets/clients/dionavi.png' },
{ name: 'A+ Nail School', src: 'assets/clients/aplus-nail-school.png' },
{ name: 'WhiteCap Institute', src: 'assets/clients/whitecap-institute.png' }];


/* ============================================================
   Browser-style screen mockup (editorial / light)
   ============================================================ */
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
              display: 'block', objectFit: "cover"
            }} />
          
        </div>
      </div>);

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
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          marginBottom: 28, opacity: 0.7
        }}>
          <div style={{
            fontSize: 10, fontWeight: 700,
            letterSpacing: '0.08em', textTransform: 'uppercase'
          }}>
            {name}
          </div>
          <div style={{ display: 'flex', gap: 12, fontSize: 9, opacity: 0.7 }}>
            <span>Menu</span><span>About</span><span>Contact</span>
          </div>
        </div>
        <div style={{
          fontSize: 'clamp(16px, 2vw, 24px)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          lineHeight: 1.05,
          maxWidth: '80%',
          marginBottom: 18
        }}>
          {headline}
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={{
            padding: '7px 14px', borderRadius: 4,
            background: t.accent, color: t.bg,
            fontSize: 10, fontWeight: 600
          }}>Get Started</div>
          <div style={{
            padding: '7px 14px', borderRadius: 4,
            border: `1px solid ${t.accent}`, opacity: 0.6,
            fontSize: 10, fontWeight: 600
          }}>Learn More</div>
        </div>
      </div>
    </div>);

}

/* ============================================================
   LANDING PAGE
   ============================================================ */
function LandingPage({ go }) {
  const [activeClient, setActiveClient] = useStateL(CLIENT_CASES[0].id);
  const client = CLIENT_CASES.find((c) => c.id === activeClient) || CLIENT_CASES[0];

  return (
    <div className="page-enter">
      {/* ================ HERO ================ */}
      <section className="page hero hero-lab">
        <div className="hero-stage">
          <div className="hero-animation">
            <iframe
              src="animation/Kinetic Hero.html"
              title="Marketing Agency for scaling business"
              loading="lazy"
              frameBorder="0"
              scrolling="no" />
          </div>

          <div className="hero-copy">
            <p className="hero-subtext">
              <span className="hero-subtext-line">From Digital Marketing Strategy to MarTech Implementation:</span><br />
              <span className="hero-subtext-line">Your Integrated Growth Partner for Organic &amp; Paid Performance</span>
            </p>
            <div className="hero-ctas">
              <button className="btn btn-primary" onClick={() => go('contact')}>
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================ WHAT WE DO ================ */}
      <section className="page section lab-section" id="what">
        <Reveal>
          <div className="section-head">
            <div>
              <div className="label">01 — What we do</div>
              <h2 className="two-line-title" style={{ marginTop: 22 }}>
                <span>Four disciplines,</span><br />
                <span>one growth engine.</span>
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="disc-grid">
          {DISCIPLINES.map((d, i) =>
          <Reveal key={d.title} delay={i * 70} className="disc-cell">
              <span className="num">{d.n} / 04</span>
              <h3>{d.title}</h3>
              <ul>
                {d.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            </Reveal>
          )}
        </div>
      </section>

      {/* ================ CLIENT RESULTS ================ */}
      <section className="page section lab-section projects-section">
        <Reveal>
          <div className="projects-head">
            <h2>Our Projects</h2>
          </div>
        </Reveal>

        <div className="client-tabs">
          {CLIENT_CASES.map((c) =>
          <button
            key={c.id}
            className={`client-tab ${activeClient === c.id ? 'active' : ''}`}
            onClick={() => setActiveClient(c.id)}>
            
              {c.name}
            </button>
          )}
        </div>

        <div className="client-content" key={activeClient}>
          <div className="client-screen">
            <ClientScreenMock
              tone={client.tone}
              headline={client.headline}
              name={client.name}
              image={client.image} />
            
          </div>

          <div className="client-detail">
            <div className="cat">{client.cat}</div>
            <h3>{client.name}</h3>
            <a className="visit" href="#" onClick={(e) => e.preventDefault()}>
              Visit website <span>↗</span>
            </a>

            {client.problems.length > 0 &&
            <div className="client-block">
                <h4>Problem</h4>
                <ul>
                  {client.problems.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            }

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
      <section className="page section lab-section">
        <Reveal>
          <div style={{ textAlign: 'center', maxWidth: 1200, margin: '0 auto 64px' }}>
            <div className="label" style={{ marginBottom: 28 }}>03 — Our clients</div>
            <h2 className="client-title">
              Our Clients
            </h2>
          </div>
        </Reveal>

        <div className="client-marquee">
          <div className="client-marquee-track">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((l, i) =>
            <div key={i} className="client-marquee-cell">
                <img src={l.src} alt={l.name} title={l.name} />
              </div>
            )}
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
      <section className="page section lab-section">
        <div className="workshops">
          <Reveal className="workshops-text">
            <div className="label">04 — Workshops</div>
            <h2 style={{ marginTop: 22 }}>
              Workshops<br />& Event Sessions
            </h2>
            <p>
              <span>From private community workshops to public seminars,</span><br />
              <span>every session is built around actionable frameworks and real case breakdowns.</span>
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
      <section className="page section community-section">
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
            <button className="btn" onClick={() => go('contact')}>
              Request access <span className="arrow">→</span>
            </button>
          </Reveal>
        </div>
      </section>

      {/* ================ FINALE ================ */}
      <section className="page finale">
        <Reveal>
          <h2 style={{ lineHeight: "1.25" }}>
            <span className="finale-line">Scalability is not luck.</span><br />
            <span className="finale-line">It's <span className="hl">architecture.</span></span>
          </h2>
          <div className="cta">
            <button className="btn btn-primary" onClick={() => go('contact')}
            style={{ padding: '18px 32px', fontSize: 15 }}>
              Get started today <span className="arrow">→</span>
            </button>
          </div>
        </Reveal>
      </section>
    </div>);

}

window.LandingPage = LandingPage;

/* Re-export the legacy constants other pages still use */
window.PROJECTS = window.PROJECTS || [
{ id: 'aplus', name: 'A+ Nail School', cat: 'Trade School & Education', tone: 'warm' },
{ id: 'hrhk', name: 'HRHK', cat: 'Non-Profit Organization', tone: 'light' },
{ id: 'whitecap', name: 'Whitecap', cat: 'Dental Education & E-commerce', tone: 'sand' },
{ id: 'icks', name: 'ICKS', cat: 'Non-Profit Organization', tone: 'light' },
{ id: 'hawaii', name: 'Hawaii', cat: 'Healthcare Provider', tone: 'lime' },
{ id: 'abs', name: 'ABS French School', cat: 'Education', tone: 'dark' },
{ id: 'sta', name: 'Straight Talk Advisor', cat: 'Executive Advisory & Consulting', tone: 'sand' }];

window.PROCESS = window.PROCESS || [
{ n: '01', t: 'Brand Positioning & Development' },
{ n: '02', t: 'Digital Assets Alignment' },
{ n: '03', t: 'Demand Generation Funnel Launch' },
{ n: '04', t: 'Sales Training & Lead Optimization' },
{ n: '05', t: 'Revenue Growth' }];
