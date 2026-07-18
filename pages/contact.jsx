/* global React, Reveal */
const { useState: useStateC } = React;

const INDUSTRIES = ['Education', 'Healthcare', 'Nonprofit', 'Local business', 'E-commerce', 'Other'];
const PROJECT_TYPES = ['Brand strategy', 'Website redesign', 'SEO & demand gen', 'CRM & sales', 'Full transformation'];
const BUDGETS = ['< $25k', '$25k – $50k', '$50k – $100k', '$100k – $250k', '$250k+'];
const CONTACT_EMAIL = 'brian@getttc.com';
const CONTACT_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

function ContactPage() {
  const [form, setForm] = useStateC({
    name: '', company: '', email: '', phone: '',
    industry: '', projectType: '', budget: '', message: ''
  });
  const [submitted, setSubmitted] = useStateC(false);
  const [sending, setSending] = useStateC(false);
  const [errors, setErrors] = useStateC({});

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const mailFallback = () => {
    const subject = `New project inquiry from ${form.name || 'Think Tank website'}`;
    const body = [
      `Name: ${form.name}`,
      `Company: ${form.company || '-'}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || '-'}`,
      `Industry: ${form.industry || '-'}`,
      `Project type: ${form.projectType || '-'}`,
      `Budget range: ${form.budget || '-'}`,
      '',
      'Message:',
      form.message
    ].join('\n');
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (sending) return;
    const errs = {};
    if (!form.name.trim()) errs.name = true;
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = true;
    if (!form.message.trim()) errs.message = true;
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSending(true);
    const data = new FormData();
    data.append('_subject', `New Think Tank project inquiry from ${form.name}`);
    data.append('_template', 'table');
    data.append('_captcha', 'false');
    data.append('name', form.name);
    data.append('company', form.company);
    data.append('email', form.email);
    data.append('phone', form.phone);
    data.append('industry', form.industry);
    data.append('project_type', form.projectType);
    data.append('budget_range', form.budget);
    data.append('message', form.message);

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data
      });
      if (!response.ok) throw new Error('Contact form submission failed');
      setSubmitted(true);
    } catch (error) {
      mailFallback();
      setSubmitted(true);
    } finally {
      setSending(false);
    }
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
            from <strong>{CONTACT_EMAIL}</strong>. In the meantime, take a
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
        <h1 className="contact-hero-title" style={{ marginTop: 30 }}>
          Let's build something<br />that <span className="contact-highlight">grows</span>.
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
              <button className="btn btn-primary" type="submit" disabled={sending} style={{ padding: '18px 28px', fontSize: 14 }}>
                {sending ? 'Sending' : 'Start your project'} <span className="arrow">→</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="page section">
        <Reveal>
          <p className="statement">
            <span className="quiet">Growth starts with clarity.</span><br />
            Let's build the <span className="hl">system</span> behind it.
          </p>
        </Reveal>
      </section>
    </div>
  );
}

window.ContactPage = ContactPage;
