/* global React, Reveal, Placeholder, PROJECTS */

function WorksPage({ go }) {
  return (
    <div className="page-enter">
      <section className="page page-hero" style={{ padding: "151px 60px 101px" }}>
        <div className="label">Our works — 2018 → 2026</div>
        <h1 className="works-title" style={{ marginTop: 30 }}>
          Our works
        </h1>
        <p className="sub works-sub">
          <span>Selected transformations across education, healthcare, nonprofits, and service businesses.</span><br />
          <span>Six representative engagements below — the full portfolio runs to forty-plus.</span>
        </p>
      </section>

      <section className="page section" style={{ padding: "151px 60px" }}>
        <div className="project-grid masonry">
          {PROJECTS.map((p, i) =>
          <Reveal
            key={p.id}
            delay={i * 60}
            className="card"
            as="a"
            onClick={(e) => {e.preventDefault();if (p.id === 'aplus') go('case');}}>
            
              <div className="card-media" style={{ aspectRatio: i % 3 === 1 ? '4/5' : '5/4' }}>
                <Placeholder label={p.name} tone={p.tone} />
              </div>
              <div className="card-meta">
                <div>
                  <h3>{p.name.toUpperCase()}</h3>
                  <div className="cat">{p.cat}</div>
                </div>
                <span className="arrow-circle">↗</span>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <section className="page section" style={{ padding: "151px 60px" }}>
        <Reveal>
          <p className="statement">
            <span className="quiet">Every project starts</span><br />
            with one question: <span className="hl">what's the system</span><br />
            behind the result?
          </p>
        </Reveal>
      </section>
    </div>);

}

window.WorksPage = WorksPage;
