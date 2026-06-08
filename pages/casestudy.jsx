/* global React, Reveal, Placeholder */

function CaseStudyPage({ go }) {
  return (
    <div className="page-enter">
      <section className="page page-hero">
        <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
          <div className="label">Case Study — 01</div>
          <div style={{ width: 60, height: 1, background: '#eaeaea' }}></div>
          <div className="label" style={{ color: '#111' }}>A+ Nail School</div>
        </div>
        <h1 style={{ marginTop: 30 }}>
          A+ Nail<br />School.
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, marginTop: 60, maxWidth: 1300 }}
             className="cs-intro">
          <p className="sub" style={{ margin: 0 }}>
            A+ Nail School partnered with Think Tank Consulting during a period
            of digital growth and operational inefficiency. Despite offering
            strong training programs, their online presence and sales systems
            were not supporting their business potential.
          </p>
          <p className="sub" style={{ margin: 0 }}>
            Our team led a full transformation to modernize the brand, rebuild
            digital infrastructure, and establish a performance-driven
            marketing and sales engine.
          </p>
        </div>
        <div style={{ marginTop: 50 }}>
          <button className="btn btn-primary">
            View website <span className="arrow">↗</span>
          </button>
        </div>
      </section>

      {/* Meta strip */}
      <section className="page" style={{ paddingBottom: 0 }}>
        <div className="cs-meta">
          <div className="cs-meta-cell">
            <div className="label">Industry</div>
            <div className="val">Trade School & Education</div>
          </div>
          <div className="cs-meta-cell">
            <div className="label">Engagement</div>
            <div className="val">24 months</div>
          </div>
          <div className="cs-meta-cell">
            <div className="label">Scope</div>
            <div className="val">Brand, web, CRM, paid</div>
          </div>
          <div className="cs-meta-cell">
            <div className="label">Year</div>
            <div className="val">2023 — 2025</div>
          </div>
        </div>

        <Reveal>
          <div className="cs-hero-img">
            <Placeholder label="A+ Nail School — Hero image" tone="warm" />
          </div>
        </Reveal>
      </section>

      {/* Results */}
      <section className="page section">
        <Reveal>
          <div className="section-head">
            <div>
              <div className="label">Results</div>
              <h2 style={{ marginTop: 22 }}>Two years.<br />Three transformations.</h2>
            </div>
            <p className="right">
              Quantitative outcomes from the engagement, measured against
              twelve-month baselines prior to launch.
            </p>
          </div>
        </Reveal>

        <div className="metrics">
          <Reveal className="metric">
            <div className="big">3<sup>x</sup></div>
            <p>Revenue growth in two years</p>
          </Reveal>
          <Reveal delay={120} className="metric">
            <div className="big">50<sup>x</sup></div>
            <p>Increase in website traffic</p>
          </Reveal>
          <Reveal delay={240} className="metric">
            <div className="big">13<sup>x</sup></div>
            <p>Increase in monthly student sign-ups</p>
          </Reveal>
        </div>
      </section>

      {/* Problems */}
      <section className="page section">
        <div className="problems-grid">
          <Reveal>
            <div>
              <div className="label">Problems</div>
              <h2 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1, marginTop: 22 }}>
                What we<br />walked into.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ul className="problems-list">
              <li><span className="pn">01</span>Low online traffic — 300 visitors per month</li>
              <li><span className="pn">02</span>Inefficient sign-ups — 22 per month</li>
              <li><span className="pn">03</span>No established sales process</li>
              <li><span className="pn">04</span>Outdated website lacking conversion structure</li>
              <li><span className="pn">05</span>No proper marketing execution in place</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Solutions */}
      <section className="page section">
        <Reveal>
          <div className="section-head">
            <div>
              <div className="label">Solutions</div>
              <h2 style={{ marginTop: 22 }}>What we built.</h2>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal className="solution">
            <div className="sn">01</div>
            <h4>Complete rebrand</h4>
            <div>
              <p style={{ color: '#444', fontSize: 15, lineHeight: 1.5 }}>
                Modernized visual identity and market positioning to match the
                quality of the training program itself.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80} className="solution">
            <div className="sn">02</div>
            <h4>Website redesign</h4>
            <ul>
              <li>Responsive design, mobile-first</li>
              <li>SEO structure across information architecture</li>
              <li>Conversion-focused landing pages</li>
              <li>Organized content architecture</li>
            </ul>
          </Reveal>

          <Reveal delay={160} className="solution">
            <div className="sn">03</div>
            <h4>SEO strategy & paid acquisition</h4>
            <ul>
              <li>Long-term SEO roadmap</li>
              <li>Paid campaigns across Meta & Google</li>
              <li>Lead quality optimization with creative testing</li>
            </ul>
          </Reveal>

          <Reveal delay={240} className="solution">
            <div className="sn">04</div>
            <h4>HubSpot CRM & sales training</h4>
            <ul>
              <li>CRM implementation and migration</li>
              <li>Lead automation and routing</li>
              <li>Sales process training for the in-house team</li>
              <li>Scalable pipeline setup</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="page section">
        <Reveal>
          <div className="section-head">
            <div>
              <div className="label">Selected outputs</div>
            </div>
          </div>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24 }}>
          <Reveal>
            <div style={{ aspectRatio: '16/10' }}>
              <Placeholder label="Brand system — applied across collateral" tone="warm" />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div style={{ aspectRatio: '4/5' }}>
              <Placeholder label="Mobile signup flow" tone="sand" />
            </div>
          </Reveal>
        </div>
        <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
          <Reveal>
            <div style={{ aspectRatio: '1/1' }}>
              <Placeholder label="Identity mark — alts" tone="dark" />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div style={{ aspectRatio: '1/1' }}>
              <Placeholder label="Editorial type system" tone="light" />
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div style={{ aspectRatio: '1/1' }}>
              <Placeholder label="HubSpot dashboard config" tone="lime" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Next */}
      <section className="page section">
        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
            <div>
              <div className="label">Next case</div>
              <h2 style={{ fontSize: 'clamp(48px, 7vw, 96px)', fontWeight: 700, letterSpacing: '-0.035em', marginTop: 20 }}>
                Whitecap →
              </h2>
            </div>
            <button className="btn btn-ghost" onClick={() => go('works')}>
              All works <span className="arrow">→</span>
            </button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

window.CaseStudyPage = CaseStudyPage;
