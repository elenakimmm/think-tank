/* global React, Reveal, Placeholder, PROCESS */

const TEAM = [
{ name: 'Min-jun Park', role: 'Founding partner', tone: 'sand', image: 'assets/team/team-01.jpg' },
{ name: 'Aria Lopez', role: 'Strategy lead', tone: 'warm', image: 'assets/team/team-02.jpg' },
{ name: 'David Chen', role: 'Design director', tone: 'light', image: 'assets/team/team-03.jpg' },
{ name: 'Sofia Reyes', role: 'Growth lead', tone: 'lime', image: 'assets/team/team-04.jpg' },
{ name: 'Tomás Vidal', role: 'CRM architect', tone: 'dark', image: 'assets/team/team-05.jpg' },
{ name: 'Naomi Yates', role: 'Senior designer', tone: 'sand', image: 'assets/team/team-06.jpg' },
{ name: 'Jin-ho Choi', role: 'Engineer', tone: 'light', image: 'assets/team/team-07.jpg' },
{ name: 'Rosa Akoni', role: 'Producer', tone: 'warm', image: 'assets/team/team-08.jpg' }];


const WWD = [
{ n: '01', t: 'Uncover root causes of stagnation' },
{ n: '02', t: 'Implement proven best practices' },
{ n: '03', t: 'Bridge potential and performance' },
{ n: '04', t: 'Gain strategic competitive clarity' },
{ n: '05', t: 'Build long-term growth systems' }];


const TTC = [
'We help close deals',
'Focus on revenue opportunities',
'Build growth roadmaps',
'Long-term partnership model',
'Sales + marketing alignment'];


const TYPICAL = [
'Weak implementation strategy',
'Project ends after delivery',
'Lead generation only',
'Disconnected execution',
'No sales enablement'];


function AboutPage({ go }) {
  return (
    <div className="page-enter">
      {/* Story */}
      <section className="page page-hero" style={{ padding: "151px 60px 101px" }}>
        <div className="label">Our story — Who we are</div>
        <Reveal>
          <h1 className="story story-compact" style={{ marginTop: 36 }}>
            <span>We design for a better today,</span>
            <br />
            <span className="quiet">because the future isn't some far-off dream.</span>
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <div className="story-body">
            <p>
              It's built brick by brick by what we create now. Every project is
              a chance to set the foundation for something that will compound
              for years.
            </p>
            <p>
              We believe our skills should elevate communities, modernize local
              services, improve accessibility, and create meaningful impact
              beyond corporate growth.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Team */}
      <section className="page section" style={{ padding: "151px 60px" }}>
        <Reveal>
          <div className="section-head">
            <div>
              <h2 className="single-line-title" style={{ marginTop: 22 }}>The people behind the work</h2>
            </div>
          </div>
        </Reveal>

        <div className="team-grid">
          {TEAM.map((m, i) =>
          <Reveal key={m.name} delay={i * 50} className="team-card">
              <div className="team-photo">
                <img src={m.image} alt={`${m.name} portrait`} />
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* What we do */}
      <section className="page section" style={{ padding: "151px 60px" }}>
        <Reveal>
          <div className="section-head">
            <div>
              <div className="label">What we do</div>
              <h2 className="single-line-title" style={{ marginTop: 22 }}>
                Identify and eliminate your biggest growth inhibitors
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="wwd-grid">
          {WWD.map((w, i) =>
          <Reveal key={w.n} delay={i * 60} className="wwd-cell">
              <div className="num">{w.n}</div>
              <p>{w.t}</p>
            </Reveal>
          )}
        </div>
      </section>

      {/* Process */}
      <section className="page section" style={{ padding: "151px 60px" }}>
        <Reveal>
          <div className="section-head">
            <div>
              <div className="label">TTC Process</div>
              <h2 className="single-line-title" style={{ marginTop: 22, textAlign: "left" }}>
                Five steps, in order
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="process">
          {PROCESS.map((p, i) =>
          <Reveal key={p.n} delay={i * 80} className="process-step">
              <div className="dot"></div>
              <div className="step-num">{p.n}</div>
              <h4>{p.t}</h4>
            </Reveal>
          )}
        </div>
      </section>

      {/* Why we're different */}
      <section className="page section" style={{ padding: "151px 60px" }}>
        <Reveal>
          <div className="section-head">
            <div>
              <div className="label">Why we're different</div>
              <h2 className="single-line-title" style={{ marginTop: 22 }}>
                Why we’re different
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="compare">
          <Reveal className="compare-col">
            <div className="tag">Think Tank Consulting</div>
            <h3 style={{ marginTop: 8 }}>TTC<sup style={{ fontSize: '0.4em', color: '#8a8a8a', marginLeft: 6 }}>®</sup></h3>
            <ul>
              {TTC.map((t) =>
              <li key={t}><span className="check">✓</span>{t}</li>
              )}
            </ul>
          </Reveal>

          <Reveal delay={100} className="compare-col">
            <div className="tag">The rest of the market</div>
            <h3 className="muted" style={{ marginTop: 8 }}>Typical Agencies</h3>
            <ul>
              {TYPICAL.map((t) =>
              <li key={t}><span className="x">×</span><span style={{ color: '#888' }}>{t}</span></li>
              )}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Statement */}
      <section className="page section" style={{ padding: "151px 60px" }}>
        <Reveal>
          <p className="statement">
            <span className="quiet">We don't sell decks.</span><br />
            We build the <span className="hl">infrastructure</span> growth runs on.
          </p>
        </Reveal>
      </section>
    </div>);

}

window.AboutPage = AboutPage;
