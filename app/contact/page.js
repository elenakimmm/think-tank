'use client';

import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Reveal } from '@/components/Reveal';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <Navigation />
      <main className="page-enter">
        <section className="page" style={{ padding: "140px 60px 80px" }}>
          <Reveal>
            <div style={{ maxWidth: 900 }}>
              <div className="label">Get in Touch</div>
              <h1 style={{ fontSize: 'clamp(40px, 5vw, 80px)', fontWeight: 800, marginTop: 20, lineHeight: 1.15 }}>
                Let's talk about your growth.
              </h1>
            </div>
          </Reveal>
        </section>

        <section className="page section" style={{ padding: "80px 60px" }}>
          <div style={{ maxWidth: 700 }}>
            <Reveal>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #eaeaea',
                      borderRadius: 4,
                      fontSize: 14,
                      outline: 'none',
                      fontFamily: 'inherit'
                    }}
                    required
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #eaeaea',
                      borderRadius: 4,
                      fontSize: 14,
                      outline: 'none',
                      fontFamily: 'inherit'
                    }}
                    required
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={6}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #eaeaea',
                      borderRadius: 4,
                      fontSize: 14,
                      outline: 'none',
                      fontFamily: 'inherit',
                      resize: 'vertical'
                    }}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ alignSelf: 'flex-start', padding: '14px 28px', fontSize: 14 }}
                >
                  Send Message <span className="arrow">→</span>
                </button>

                {submitted && (
                  <p style={{ color: '#666', fontSize: 14 }}>
                    ✓ Thanks for reaching out! We'll get back to you soon.
                  </p>
                )}
              </form>
            </Reveal>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
