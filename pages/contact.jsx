/* global React, Reveal */
const { useState: useStateC } = React;

const INDUSTRIES = ['Education', 'Healthcare', 'Nonprofit', 'Local business', 'E-commerce', 'Other'];
const PROJECT_TYPES = ['Brand strategy', 'Website redesign', 'SEO & demand gen', 'CRM & sales', 'Full transformation'];
const BUDGETS = ['< $25k', '$25k – $50k', '$50k – $100k', '$100k – $250k', '$250k+'];

function ContactPage() {
  const [form, setForm] = useStateC({
    name: '', company: '', email: '', phone: '',
    industry: '', projectType: '', budget: '', message: ''
  });
  const [submitted, setSubmitted] = useStateC(false);
  const [errors, setErrors] = useStateC({});

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = true;
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = true;
    if (!form.message.trim()) errs.message = true;
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="page-enter">
        <section className="page page-hero" style={{ minHeight: '70vh' }}>
          <div className="label">Message received</div>
          <h1 style={{ marginTop: 30 }}>
            Thanks, {form.name.split(' ')[0]}.
          </h1>
          <p className="sub">
            We've received your note and will respond within one business day
            from <strong>hello@thinktank.co</strong>. In the meantime, take a
            look at our recent work.
          </p>
          <div style={{ marginTop: 36, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
              Send another <span className="arrow">→</span>
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page-enter">
      <section className="page page-hero">
        <div className="label">Contact — Start a project</div>
        <h1 style={{ marginTop: 30 }}>
          Let's build<br />something<br />that <span style={{ background: 'var(--accent)', padding: '0 0.1em 0.04em' }}>grows</span>.
        </h1>
        <p className="sub">
          Tell us about your business, goals, and growth challenges. We respond
          to every inquiry within one business day.
        </p>
      </section>

      <section className="page section">
        <div className="contact-grid contact-grid-single">
          <form className="form" onSubmit={submit} noValidate>
            <div className="field">
              <label className="label" htmlFor="f-name">Name *</label>
              <input id="f-name" value={form.name} onChange={update('name')} placeholder="Your full name"
                     style={{ color: errors.name ? '#c33' : 'inherit' }} />
            </div>
            <div className="field">
              <label className="label" htmlFor="f-company">Company</label>
              <input id="f-company" value={form.company} onChange={update('company')} placeholder="Organization name" />
            </div>
            <div className="field">
              <label className="label" htmlFor="f-email">Email *</label>
              <input id="f-email" type="email" value={form.email} onChange={update('email')} placeholder="you@company.com"
                     style={{ color: errors.email ? '#c33' : 'inherit' }} />
            </div>
            <div className="field">
              <label className="label" htmlFor="f-phone">Phone</label>
              <input id="f-phone" value={form.phone} onChange={update('phone')} placeholder="+1 (___) ___ ____" />
            </div>
            <div className="field">
              <label className="label" htmlFor="f-industry">Industry</label>
              <select id="f-industry" value={form.industry} onChange={update('industry')}>
                <option value="">Select industry</option>
                {INDUSTRIES.map((x) => <option key={x}>{x}</option>)}
              </select>
              <span className="chev">↓</span>
            </div>
            <div className="field">
              <label className="label" htmlFor="f-type">Project type</label>
              <select id="f-type" value={form.projectType} onChange={update('projectType')}>
                <option value="">Select project type</option>
                {PROJECT_TYPES.map((x) => <option key={x}>{x}</option>)}
              </select>
              <span className="chev">↓</span>
            </div>
            <div className="field full">
              <label className="label" htmlFor="f-budget">Budget range</label>
              <select id="f-budget" value={form.budget} onChange={update('budget')}>
                <option value="">Select budget range</option>
                {BUDGETS.map((x) => <option key={x}>{x}</option>)}
              </select>
              <span className="chev">↓</span>
            </div>
            <div className="field full">
              <label className="label" htmlFor="f-msg">Message *</label>
              <textarea id="f-msg" value={form.message} onChange={update('message')}
                        placeholder="Tell us about your business, goals, and growth challenges."
                        style={{ color: errors.message ? '#c33' : 'inherit' }} />
            </div>

            <div className="submit-row" style={{ gridColumn: 'span 2' }}>
              <p className="small">
                By submitting this form you agree to be contacted about your
                project. We respond within one business day, M – F.
              </p>
              <button className="btn btn-primary" type="submit" style={{ padding: '18px 28px', fontSize: 14 }}>
                Start your project <span className="arrow">→</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="page section">
        <Reveal>
          <p className="statement">
            <span className="quiet">Growth starts with clarity.</span><br />
            Let's build the <span className="hl">system</span><br />
            behind it.
          </p>
        </Reveal>
      </section>
    </div>
  );
}

window.ContactPage = ContactPage;
