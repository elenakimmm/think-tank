'use client';

import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Reveal } from '@/components/Reveal';
import { Placeholder } from '@/components/Placeholder';

const ProjectCard = ({ title, category, bgColor, size = 'normal' }) => {
  const [hovering, setHovering] = useState(false);

  const getGridStyles = () => {
    switch (size) {
      case 'tall':
        return { gridColumn: 'span 1', gridRow: 'span 2' };
      case 'wide':
        return { gridColumn: 'span 2', gridRow: 'span 1' };
      default:
        return { gridColumn: 'span 1', gridRow: 'span 1' };
    }
  };

  const getMinHeight = () => {
    return size === 'tall' ? '550px' : '280px';
  };

  return (
    <div
      style={{
        ...getGridStyles(),
        position: 'relative',
        backgroundColor: bgColor || '#f5f5f5',
        minHeight: getMinHeight(),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        cursor: 'pointer',
        transition: 'transform 0.3s ease'
      }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Image/Color Area */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: bgColor,
          zIndex: 0
        }}
      >
        {!bgColor && <Placeholder />}
      </div>

      {/* Project Info Footer */}
      <div style={{ padding: '24px', position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 16 }}>
        <div>
          <h3 style={{ fontSize: 14, fontWeight: 700, margin: '0 0 6px 0', letterSpacing: '0.02em' }}>
            {title}
          </h3>
          <p style={{ fontSize: 11, color: '#999', textTransform: 'uppercase', letterSpacing: '0.08em', margin: 0 }}>
            {category}
          </p>
        </div>
        <button
          style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            backgroundColor: '#1a1a1a',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: 14,
            flexShrink: 0,
            opacity: hovering ? 0.8 : 1,
            transition: 'opacity 0.3s ease'
          }}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default function Works() {
  const projects = [
    { title: 'A+ NAIL SCHOOL', category: 'Trade School & Education', size: 'normal', bgColor: '#f5ede6' },
    { title: 'HIHIVE', category: 'Community Platform', size: 'tall', bgColor: '#f0f0f0' },
    { title: 'WHITECAP', category: 'Professional Services', size: 'normal', bgColor: '#f5ede6' },
    { title: 'KCS', category: 'Education Technology', size: 'normal', bgColor: '#f0f0f0' },
    { title: 'HAMAM', category: 'Luxury Wellness', size: 'tall', bgColor: '#d4f949' },
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
              <p style={{ fontSize: 18, color: '#ccc', marginBottom: 20, margin: 0 }}>CASE STUDIES</p>
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
              <h2 style={{ fontSize: 'clamp(32px, 4vw, 64px)', fontWeight: 800, marginBottom: 20, lineHeight: 1.15 }}>
                Growth starts with clarity.
              </h2>
              <p style={{ fontSize: 16, color: '#999', maxWidth: 600, lineHeight: 1.6, marginBottom: 40, fontWeight: 400 }}>
                Let's build the system behind it.
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
