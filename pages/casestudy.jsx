/* global React, Reveal, Placeholder */

const CASE_STUDIES = {
  aplus: {
    index: '01',
    name: 'A+ Nail School',
    title: <>A+ Nail<br />School.</>,
    industry: 'Trade School & Education',
    engagement: '24 months',
    scope: 'Web, SEO, paid, CRM',
    year: '2023 — 2025',
    website: 'https://aplusnailschool.com/',
    image: 'assets/clients/aplus-case-school.png',
    tone: 'warm',
    intro: [
      'A+ Nail School is a Chicagoland nail technician school built around a clear promise: polished for success. The school offers flexible enrollment, a 350-hour nail tech curriculum, student aid options, and business training for future salon professionals.',
      'Think Tank rebuilt the digital growth system around that offer: clearer positioning, a conversion-focused website, SEO content, paid acquisition, and CRM workflows that made student interest easier to capture and follow up.'
    ],
    resultsTitle: <>A stronger school story,<br />built to enroll.</>,
    resultsCopy: 'The case study now reflects the live A+ offer: flexible training, career support, certification advantages, and measurable demand growth.',
    metrics: [
      ['2', 'K+', 'Graduates highlighted by the school'],
      ['95', '%', 'Pass license test rate promoted on the site'],
      ['350', 'hr', 'Hands-on curriculum to become a licensed nail tech']
    ],
    problems: [
      'The school had a strong offline reputation but needed a clearer digital enrollment journey',
      'Course value was spread across multiple sections instead of being packaged as one compelling offer',
      'Career days, workshops, and salon connections were not doing enough work in the conversion story',
      'The Après Gel-X certification advantage needed stronger placement',
      'Student inquiries needed better capture, nurturing, and follow-up structure'
    ],
    solutions: [
      ['Offer positioning', ['Centered the story around “Your Nail Tech Journey Starts Here”', 'Clarified flexible enrollment, payment support, and included student materials', 'Elevated career outcomes and business-skill development']],
      ['Website and conversion system', ['Rebuilt the site around course discovery and tour requests', 'Created clearer calls to action for getting started and scheduling a tour', 'Organized the experience for mobile-first student research']],
      ['SEO and content strategy', ['Built keyword pathways around nail tech licensing and career education', 'Supported blog content for students researching nail careers', 'Connected course, FAQ, and state requirement content into a stronger search structure']],
      ['CRM and acquisition', ['Improved lead capture for tour and information requests', 'Supported paid acquisition campaigns', 'Created follow-up structure for prospective students']],
      ['Events and credibility', ['Highlighted career days with salon-owner connections', 'Promoted exclusive workshops and continuing education', 'Strengthened the Après Gel-X certification advantage']]
    ],
    gallery: [
      { label: 'A+ homepage and enrollment experience', image: 'assets/clients/aplus-case-school.png', tone: 'warm' },
      { label: 'Student training and school environment', image: 'assets/clients/aplus-case-hero.jpeg', tone: 'sand' },
      { label: 'Après Gel-X certification module', image: 'assets/clients/aplus-case-gelx.png', tone: 'dark' },
      { label: 'Acrylic course module', image: 'assets/clients/aplus-case-acrylic.png', tone: 'light' },
      { label: 'Workshops and career days', image: 'assets/clients/aplus-case-events.jpeg', tone: 'lime' }
    ],
    nextId: 'hrhk'
  },
  hrhk: {
    index: '02',
    name: 'HRHK',
    title: <>HRHK.</>,
    industry: 'Non-Profit Organization',
    engagement: '18 months',
    scope: 'Web, publications, advocacy',
    year: '2024 — 2025',
    website: 'https://www.hrnk.org/',
    image: 'assets/clients/hrnk-case-hero.webp',
    tone: 'light',
    intro: [
      'The Committee for Human Rights in North Korea is an advocacy and research organization focused on uncovering human rights abuses under the DPRK and educating the public on behalf of the North Korean people.',
      'Think Tank shaped the digital experience around HRNK’s real operating needs: a mission-led donation path, a large publications archive, events and hearings, newsletter growth, and high-impact education tools like the prison camp interactive.'
    ],
    resultsTitle: <>Advocacy content,<br />built for action.</>,
    resultsCopy: 'The updated case study reflects the live HRNK site: mission clarity, report discoverability, donation pathways, and public education around North Korea’s prison camps.',
    metrics: [
      ['2001', '', 'Year HRNK was launched by foreign policy and human rights specialists'],
      ['6', '', 'Guiding action areas presented on the homepage'],
      ['3D', '', 'Interactive prison camp model promoted as an education tool']
    ],
    problems: [
      'The mission needed to be understandable immediately for donors, researchers, press, and policymakers',
      'A deep archive of publications and annual reports needed clearer paths for discovery',
      'Events, hearings, media, and policy content had to sit within one coherent navigation system',
      'Donation and newsletter actions needed stronger placement throughout the experience',
      'Interactive education tools required clearer framing for public awareness'
    ],
    solutions: [
      ['Mission-first structure', ['Centered the homepage around “Support Human Rights in North Korea”', 'Clarified HRNK’s advocacy and research role', 'Built direct pathways for Donate, About, Publications, Events, Media, and Contact']],
      ['Publication architecture', ['Organized HRNK publications, annual reports, daily press content, and special projects', 'Improved scanning for latest reports and long-form research', 'Supported large report archives with clearer entry points']],
      ['Advocacy conversion paths', ['Elevated newsletter subscription', 'Strengthened donation prompts', 'Connected visitors to guiding objectives and policy recommendations']],
      ['Education and media system', ['Highlighted the interactive prison camp model', 'Structured media, timelines, hearings, and news as public education resources', 'Improved the bridge between research depth and public action']]
    ],
    gallery: [
      { label: 'Human rights advocacy homepage', image: 'assets/clients/hrnk-case-hero.webp', tone: 'light' },
      { label: 'Mission and action section', image: 'assets/clients/hrnk-case-mission.webp', tone: 'sand' },
      { label: 'Leadership and board content', image: 'assets/clients/hrnk-case-board.webp', tone: 'dark' },
      { label: 'Latest publications and reports', image: 'assets/clients/hrnk-case-report.jpg', tone: 'light' },
      { label: 'North Korea prison camp interactive', image: 'assets/clients/hrnk-case-prison-camp.webp', tone: 'lime' }
    ],
    nextId: 'whitecap'
  },
  whitecap: {
    index: '03',
    name: 'WhiteCap',
    title: <>WhiteCap<br />Institute.</>,
    industry: 'Dental Education & E-commerce',
    engagement: '16 months',
    scope: 'Web, courses, e-commerce',
    year: '2024 — 2025',
    website: 'https://whitecapinstitute.com/',
    image: 'assets/clients/whitecap-case-training.png',
    tone: 'sand',
    intro: [
      'WhiteCap Institute is a Utah-based dental implant training facility offering continuing education courses built around guided live patient procedures, hands-on simulations, and instruction from implant professionals.',
      'Think Tank shaped the digital experience around WhiteCap’s strongest differentiators: a three-day implant bootcamp, real surgical training environments, CE credit credibility, and a course catalog that helps dentists choose the right next step.'
    ],
    resultsTitle: <>Hands-on training,<br />built to convert.</>,
    resultsCopy: 'The updated case study now reflects the live WhiteCap offer: implant CE courses, real clinical training, national provider credentials, and a clearer path from course interest to registration.',
    metrics: [
      ['2005', '', 'Year WhiteCap Institute was originally founded'],
      ['20.5', '', 'CE credits promoted for the 3-Day Bootcamp'],
      ['10', '', 'Proprietary introductory and advanced modules']
    ],
    problems: [
      'The course catalog needed to communicate both clinical rigor and practical accessibility',
      'The 3-Day Bootcamp value proposition needed stronger positioning around live surgery and hands-on training',
      'ADA CERP and PACE provider credibility needed to be visible without slowing down course discovery',
      'Dentists needed clearer paths from course research to registration or contact',
      'Facility, instructor, and location advantages were not doing enough work in the conversion journey'
    ],
    solutions: [
      ['Course positioning', ['Centered the site around “Premier Dental Implant Training Courses”', 'Clarified guided live patient procedures and hands-on continuing education', 'Built stronger entry points for the 3-Day Bootcamp and advanced courses']],
      ['Registration journey', ['Improved calls to action for Register for Class, View Courses, and Contact Us', 'Organized course pages around outcomes, credits, modules, and prerequisites', 'Reduced friction between education content and enrollment intent']],
      ['Credibility system', ['Elevated ADA CERP and PACE provider information', 'Highlighted instructors with over 20 years of clinical experience', 'Connected WhiteCap’s 2005 origin story to trust and training quality']],
      ['Experience storytelling', ['Showcased real surgical operatories, modern facilities, and overhead camera training', 'Clarified the Heber Valley / Utah destination experience', 'Used hands-on course imagery to make the training environment tangible']]
    ],
    gallery: [
      { label: 'Live surgical training environment', image: 'assets/clients/whitecap-case-training.png', tone: 'sand' },
      { label: 'Premier implant course hero', image: 'assets/clients/whitecap-case-hero.png', tone: 'light' },
      { label: 'Learn by doing experience', image: 'assets/clients/whitecap-case-experience.png', tone: 'dark' },
      { label: 'ADA CERP provider credential', image: 'assets/clients/whitecap-case-ada.png', tone: 'light' },
      { label: 'PACE provider credential', image: 'assets/clients/whitecap-case-pace.png', tone: 'sand' },
      { label: '3-Day Implant Bootcamp course card', image: 'assets/clients/whitecap-case-bootcamp.png', tone: 'lime' }
    ],
    nextId: 'icks'
  },
  icks: {
    index: '04',
    name: 'ICKS',
    title: <>ICKS.</>,
    industry: 'Non-Profit Organization',
    engagement: '12 months',
    scope: 'Brand, web, content',
    year: '2024 — 2025',
    image: null,
    tone: 'light',
    intro: [
      'ICKS needed a digital presence that could explain its mission quickly, organize programs clearly, and support a wider community of stakeholders.',
      'Think Tank shaped the website and content system around simple journeys for donors, partners, members, and first-time visitors.'
    ],
    resultsTitle: <>A clearer mission,<br />with cleaner paths.</>,
    resultsCopy: 'The transformation focused on communication clarity, navigation, and a repeatable publishing structure.',
    metrics: [
      ['4', '', 'Audience pathways clarified across the site'],
      ['1', '', 'Reusable content system for ongoing updates'],
      ['3', '', 'Core program areas reorganized for faster comprehension']
    ],
    problems: ['Mission story was hard to scan quickly', 'Program pages lacked clear next steps', 'Content updates were manual and inconsistent', 'Stakeholder journeys were fragmented'],
    solutions: [
      ['Positioning structure', ['Clarified the core message', 'Organized content by audience need', 'Created a more focused nonprofit narrative']],
      ['Website system', ['Reusable page modules', 'Simplified navigation', 'Mobile-first structure']],
      ['Content operations', ['Repeatable program templates', 'Campaign-ready landing sections', 'Cleaner handoff for internal updates']]
    ],
    gallery: ['Mission page system', 'Program landing template', 'Donation journey', 'Partner content model', 'Campaign module set'],
    nextId: 'hawaii'
  },
  hawaii: {
    index: '05',
    name: 'Hawaii',
    title: <>Hawaii Elite<br />Chiropractic.</>,
    industry: 'Healthcare Provider',
    engagement: '20 months',
    scope: 'Brand, web, SEO, paid',
    year: '2023 — 2025',
    image: 'assets/clients/hawaii-screen.png',
    tone: 'lime',
    intro: [
      'Hawaii Elite Chiropractic needed a compliant growth system that could support clinic expansion while making patient acquisition easier to manage.',
      'We rebuilt the brand and website, improved local search visibility, and connected campaign activity to sales and intake operations.'
    ],
    resultsTitle: <>Clinic growth,<br />with a cleaner system.</>,
    resultsCopy: 'The work supported both brand trust and patient acquisition across two clinic locations.',
    metrics: [
      ['30', '%', 'Year-over-year revenue growth across both clinics'],
      ['2', '', 'Clinics supported with a unified marketing system'],
      ['CRM', '', 'Patient intake and follow-up process improved']
    ],
    problems: ['Website migration required', 'CRM implementation needed HIPAA-conscious workflows', 'Patient acquisition was difficult to track', 'Clinic growth needed stronger local visibility'],
    solutions: [
      ['Brand and website', ['Brand refresh', 'WordPress website redevelopment', 'Service pages optimized for conversion']],
      ['Search and acquisition', ['SEO implementation', 'Paid ads', 'Local patient journey improvements']],
      ['Sales training', ['CRM setup', 'Follow-up process support', 'Team training for patient inquiries']]
    ],
    gallery: ['Healthcare website system', 'Local SEO structure', 'Patient inquiry flow', 'Campaign landing pages', 'CRM intake process'],
    nextId: 'abs'
  },
  abs: {
    index: '06',
    name: 'ABS French School',
    title: <>ABS French<br />School.</>,
    industry: 'Education',
    engagement: '14 months',
    scope: 'Brand, web, SEO, CRM',
    year: '2024 — 2025',
    image: 'assets/clients/abs-screen.png',
    tone: 'dark',
    intro: [
      'ABS French School had a warm, trusted education experience, but its website and marketing systems did not communicate that quality clearly enough.',
      'Think Tank rebuilt the digital foundation with brand improvements, a WordPress website, SEO content, email, paid acquisition, and HubSpot implementation.'
    ],
    resultsTitle: <>A better school story,<br />built to convert.</>,
    resultsCopy: 'The engagement connected brand clarity with measurable acquisition and traffic growth.',
    metrics: [
      ['60', '%', 'Year-over-year growth'],
      ['7', 'x', 'Traffic increase'],
      ['CRM', '', 'HubSpot implementation for better lead management']
    ],
    problems: ['Outdated website', 'Never done marketing', 'School experience was stronger than the digital presence', 'Lead follow-up needed a clearer system'],
    solutions: [
      ['Brand and website', ['Branding improvements', 'WordPress website with SEO', 'Clearer admissions journey']],
      ['Demand generation', ['SEO blog operation', 'Email marketing', 'Paid ads']],
      ['CRM implementation', ['HubSpot setup', 'Lead capture and organization', 'Follow-up workflows']]
    ],
    gallery: ['Preschool homepage system', 'Admissions journey', 'SEO content plan', 'Email nurture flow', 'HubSpot lead setup'],
    nextId: 'aplus'
  }
};

function MetricValue({ value, suffix }) {
  return (
    <div className="big">
      {value}{suffix ? <sup>{suffix}</sup> : null}
    </div>
  );
}

function CaseImage({ item }) {
  if (item.image) {
    return <img src={item.image} alt={`${item.name} case study`} />;
  }

  return <Placeholder label={`${item.name} — Hero image`} tone={item.tone} />;
}

function GalleryTile({ tile, fallbackTone }) {
  const data = typeof tile === 'string' ? { label: tile, tone: fallbackTone } : tile;

  if (data.image) {
    return <img src={data.image} alt={data.label} />;
  }

  return <Placeholder label={data.label} tone={data.tone || fallbackTone} />;
}

function CaseStudyPage({ go, caseId = 'aplus' }) {
  const item = CASE_STUDIES[caseId] || CASE_STUDIES.aplus;
  const next = CASE_STUDIES[item.nextId] || CASE_STUDIES.aplus;

  return (
    <div className="page-enter">
      <section className="page page-hero">
        <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
          <div className="label">Case Study — {item.index}</div>
          <div style={{ width: 60, height: 1, background: '#eaeaea' }}></div>
          <div className="label" style={{ color: '#111' }}>{item.name}</div>
        </div>
        <h1 style={{ marginTop: 30 }}>{item.title}</h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, marginTop: 60, maxWidth: 1300 }}
             className="cs-intro">
          {item.intro.map((copy, i) =>
            <p className="sub" style={{ margin: 0 }} key={i}>{copy}</p>
          )}
        </div>
        <div style={{ marginTop: 50 }}>
          {item.website ?
            <a className="btn btn-primary" href={item.website} target="_blank" rel="noreferrer">
              View website <span className="arrow">↗</span>
            </a> :
            <button className="btn btn-primary">
              View website <span className="arrow">↗</span>
            </button>
          }
        </div>
      </section>

      <section className="page" style={{ paddingBottom: 0 }}>
        <div className="cs-meta">
          <div className="cs-meta-cell">
            <div className="label">Industry</div>
            <div className="val">{item.industry}</div>
          </div>
          <div className="cs-meta-cell">
            <div className="label">Engagement</div>
            <div className="val">{item.engagement}</div>
          </div>
          <div className="cs-meta-cell">
            <div className="label">Scope</div>
            <div className="val">{item.scope}</div>
          </div>
          <div className="cs-meta-cell">
            <div className="label">Year</div>
            <div className="val">{item.year}</div>
          </div>
        </div>

        <Reveal>
          <div className="cs-hero-img">
            <CaseImage item={item} />
          </div>
        </Reveal>
      </section>

      <section className="page section">
        <Reveal>
          <div className="section-head">
            <div>
              <div className="label">Results</div>
              <h2 style={{ marginTop: 22 }}>{item.resultsTitle}</h2>
            </div>
            <p className="right">{item.resultsCopy}</p>
          </div>
        </Reveal>

        <div className="metrics">
          {item.metrics.map(([value, suffix, copy], i) =>
            <Reveal className="metric" delay={i * 120} key={`${value}-${copy}`}>
              <MetricValue value={value} suffix={suffix} />
              <p>{copy}</p>
            </Reveal>
          )}
        </div>
      </section>

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
              {item.problems.map((problem, i) =>
                <li key={problem}><span className="pn">{String(i + 1).padStart(2, '0')}</span>{problem}</li>
              )}
            </ul>
          </Reveal>
        </div>
      </section>

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
          {item.solutions.map(([title, points], i) =>
            <Reveal delay={i * 80} className="solution" key={title}>
              <div className="sn">{String(i + 1).padStart(2, '0')}</div>
              <h4>{title}</h4>
              <ul>
                {points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </Reveal>
          )}
        </div>
      </section>

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
            <div className="cs-gallery-tile" style={{ aspectRatio: '16/10' }}>
              <GalleryTile tile={item.gallery[0]} fallbackTone={item.tone} />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="cs-gallery-tile" style={{ aspectRatio: '4/5' }}>
              <GalleryTile tile={item.gallery[1]} fallbackTone="sand" />
            </div>
          </Reveal>
        </div>
        <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
          {item.gallery.slice(2).map((tile, i) =>
            <Reveal delay={i * 80} key={typeof tile === 'string' ? tile : tile.label}>
              <div className="cs-gallery-tile" style={{ aspectRatio: '1/1' }}>
                <GalleryTile tile={tile} fallbackTone={['dark', 'light', 'lime'][i] || 'light'} />
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <section className="page section">
        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
            <div>
              <div className="label">Next case</div>
              <h2 style={{ fontSize: 'clamp(48px, 7vw, 96px)', fontWeight: 700, letterSpacing: '-0.035em', marginTop: 20 }}>
                {next.name} →
              </h2>
            </div>
            <button className="btn btn-ghost" onClick={() => go(`case:${item.nextId}`)}>
              Next case <span className="arrow">→</span>
            </button>
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
