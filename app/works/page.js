'use client';

import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Reveal } from '@/components/Reveal';
import { Placeholder } from '@/components/Placeholder';

const ProjectCard = ({ title, category, bgColor, size = 'normal', hoverBg = false }) => {
  const [hovering, setHovering] = useState(false);

  const sizes = {
    normal: { gridColumn: 'span 1', gridRow: 'span 1' },
    tall: { gridColumn: 'span 1', gridRow: 'span 2' },
    wide: { gridColumn: 'span 2', gridRow: 'span 1' }
  };

  return (
    <div
      style={{
        ...sizes[size],
        position: 'relative',
        backgroundColor: bgColor || '#f5f5f5',
        borderRadius: 0,
        overflow: 'hidden',
        cursor: 'pointer',
        minHeight: size === 'tall' ? '600px' : '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Project Image/Placeholder Area */}
      <div style={{ flex: 1, backgroundColor: bgColor || '#f5f5f5', position: 'relative' }}>
        {bgColor === '#FFF35C' && (
          <div style={{ width: '100%', height: '100%', backgroundColor: bgColor }} />
        )}
        {bgColor === '#1a1a1a' && (
          <div style={{ width: '100%', height: '100%', backgroundColor: bgColor }} />
        )}
        {!bgColor && <Placeholder />}
      </div>

      {/* Project Info */}
      <div style={{ padding: '24px', backgroundColor: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: 16, fontWeight: 800, margin: '0 0 4px 0', lineHeight: 1.2 }}>
              {title}
            </h3>
            <p style={{ fontSize: 12, color: '#999', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>
              {category}
            </p>
          </div>
          <button
            style={{
              width: 48,
              height: 48,
              borderRadius: '50%',
              backgroundColor: hovering ? '#1a1a1a' : 'white',
              border: hovering ? 'none' : '1px solid #e0e0e0',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: hovering ? 'white' : '#1a1a1a',
              fontSize: 20,
              transition: 'all 0.3s ease',
              flexShrink: 0
            }}
          >
            ↗
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Works() {
  const projects = [
    { title: 'A+ NAIL SCHOOL', category: 'Trade School & Education', size: 'normal' },
    { title: 'HIHIVE', category: 'Community Platform', size: 'tall' },
    { title: 'WHITECAP', category: 'Professional Services', size: 'normal' },
    { title: 'KCS', category: 'Education Technology', size: 'normal' },
    { title: 'HAMAM', category: 'Luxury Wellness', size: 'tall', bgColor: '#FFF35C' },
    { title: 'ABS FRENCH SCHOOL', category: 'Education', size: 'normal', bgColor: '#1a1a1a' }
  ];

  return (
    <>
      <Navigation />
      <main className="page-enter">
        {/* Hero Section */}
        <section className="page" style={{ padding: "140px 60px 80px" }}>
          <Reveal>
            <div style={{ maxWidth: 900 }}>
              <div className="label">Our Work</div>
              <h1 style={{ fontSize: 'clamp(40px, 5vw, 80px)', fontWeight: 800, marginTop: 20, lineHeight: 1.15 }}>
                Our works.
              </h1>
            </div>
          </Reveal>
        </section>

        {/* Description */}
        <section className="page section" style={{ padding: "0 60px 80px" }}>
          <Reveal>
            <p style={{ fontSize: 18, color: '#666', lineHeight: 1.8, maxWidth: 700 }}>
              Our case studies showcase real brands, real challenges, and real results.
              From 7x traffic increases to 40x growth, we've helped our clients succeed across
              education, healthcare, nonprofits, and beyond. Explore our project gallery below.
            </p>
          </Reveal>
        </section>

        {/* Portfolio Grid */}
        <section className="page section" style={{ padding: "0 60px 80px" }}>
          <Reveal>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 24,
                marginBottom: 80
              }}
            >
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  category={project.category}
                  size={project.size}
                  bgColor={project.bgColor}
                />
              ))}
            </div>
          </Reveal>
        </section>

        {/* System Question Section */}
        <section className="page section" style={{ padding: "80px 60px" }}>
          <Reveal>
            <div style={{ maxWidth: 900 }}>
              <p style={{ fontSize: 18, color: '#999', marginBottom: 20, margin: 0 }}>CASE STUDIES</p>
              <h2 style={{ fontSize: 'clamp(40px, 5vw, 80px)', fontWeight: 800, lineHeight: 1.15 }}>
                Every project starts with one question:{' '}
                <span style={{ backgroundColor: '#FFEB3B', padding: '0 8px', fontWeight: 900 }}>
                  what's the system
                </span>{' '}
                behind the result?
              </h2>
            </div>
          </Reveal>
        </section>

        {/* Clarity Section */}
        <section className="page section" style={{ padding: "80px 60px" }}>
          <Reveal>
            <div>
              <h2 style={{ fontSize: 'clamp(32px, 4vw, 64px)', fontWeight: 800, marginBottom: 40, lineHeight: 1.15 }}>
                Growth starts with clarity.
              </h2>
              <p style={{ fontSize: 16, color: '#999', maxWidth: 600, lineHeight: 1.8, marginBottom: 40 }}>
                Let's build the system behind your growth. Unify your teams, define your positioning, and create a scalable revenue engine that works.
              </p>
              <button className="btn btn-primary" style={{ padding: '14px 28px', fontSize: 14 }}>
                Start your growth audit <span className="arrow">→</span>
              </button>
            </div>
          </Reveal>
        </section>

        <Footer />
      </main>
    </>
  );
}
