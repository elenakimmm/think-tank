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
    scope: 'Web, journal, donations',
    year: '2024 — 2025',
    website: 'https://icks.org/',
    image: 'assets/clients/icks-case-hero.jpg',
    tone: 'light',
    intro: [
      'The International Council on Korean Studies is a nonprofit, nonpartisan organization dedicated to the advancement of Korean studies and research in Korean affairs in the United States and abroad.',
      'Think Tank shaped the digital experience around ICKS’s real mission: conferences, publications, the International Journal of Korean Studies, Korean reunification dialogue, Korean American engagement, leadership visibility, and donor support.'
    ],
    resultsTitle: <>Scholarship,<br />made easier to follow.</>,
    resultsCopy: 'The updated case study now reflects the live ICKS site: journal access, annual conferences, leadership credibility, donation prompts, and Korean studies mission clarity.',
    metrics: [
      ['1996', '', 'Year ICKS was founded'],
      ['2', 'x', 'International Journal of Korean Studies publishing cadence per year'],
      ['2025', '', 'Current journal volume featured on the homepage']
    ],
    problems: [
      'The organization’s academic mission needed to be understandable at first glance',
      'Journal content, conferences, leadership, and donation pathways needed a clearer hierarchy',
      'The International Journal of Korean Studies required stronger homepage visibility',
      'Annual conference history and Korean reunification dialogue needed easier access',
      'Donor and membership calls to action needed to connect more directly to the mission'
    ],
    solutions: [
      ['Mission-first homepage', ['Centered the site around the International Council on Korean Studies name and purpose', 'Explained Korean studies advancement, research, reunification, and Korean American engagement', 'Created a cleaner first-read experience for scholars, donors, and the public']],
      ['Journal and publication structure', ['Elevated the International Journal of Korean Studies', 'Highlighted Volume XXVI, Number 2, Fall/Winter 2025', 'Created clearer paths to journal archives and featured articles']],
      ['Conference and leadership pathways', ['Organized annual conference access by year', 'Highlighted leadership and full people directory paths', 'Connected institutional credibility to program discovery']],
      ['Donation and engagement system', ['Strengthened Donate / Contribute Now calls to action', 'Framed support around elevating Korean voices and scholarship', 'Added stay-connected pathways for ongoing engagement']]
    ],
    gallery: [
      { label: 'ICKS homepage hero system', image: 'assets/clients/icks-case-hero.jpg', tone: 'light' },
      { label: 'International Council on Korean Studies identity', image: 'assets/clients/icks-case-logo.webp', tone: 'sand' },
      { label: 'Leadership profile system', image: 'assets/clients/icks-case-leadership-1.jpg', tone: 'dark' },
      { label: 'Academic leadership content', image: 'assets/clients/icks-case-leadership-2.jpg', tone: 'light' },
      { label: 'Korean studies advisor profile', image: 'assets/clients/icks-case-leadership-3.jpg', tone: 'lime' },
      { label: 'Founding member profile', image: 'assets/clients/icks-case-leadership-4.jpg', tone: 'light' },
      { label: 'Treasurer profile', image: 'assets/clients/icks-case-leadership-5.jpg', tone: 'sand' }
    ],
    nextId: 'hawaii'
  },
  hawaii: {
    index: '05',
    name: 'Hawaii',
    title: <>Hawaii Elite<br />Chiropractic.</>,
    industry: 'Healthcare Provider',
    engagement: '20 months',
    scope: 'Web, local SEO, booking',
    year: '2023 — 2025',
    website: 'https://hawaiielitechiropractic.com/',
    image: 'assets/clients/hawaii-case-hero.jpg',
    tone: 'lime',
    intro: [
      'Hawaii Elite Chiropractic is a two-location chiropractic provider serving Aiea and Honolulu around the promise “Where Healing Meets Aloha.” The practice offers chiropractic treatment, Graston Technique, orthotics, cold laser therapy, and specialized care for athletes, families, military members, expecting mothers, retirees, and patients with back pain, neck pain, headaches, and migraines.',
      'Think Tank shaped the digital experience around patient trust and appointment intent: location-specific contact paths, service clarity, award-winning care, review credibility, and a smoother request-an-appointment journey.'
    ],
    resultsTitle: <>Local care,<br />built to book.</>,
    resultsCopy: 'The updated case study reflects the live Hawaii Elite Chiropractic site: two clinic locations, service education, patient satisfaction proof, award badges, and appointment conversion paths.',
    metrics: [
      ['2', '', 'Clinic locations supported: Aiea and Honolulu'],
      ['400', '+', 'Google reviews referenced on the website'],
      ['4.9', '', 'Yelp rating promoted for patient satisfaction']
    ],
    problems: [
      'Two clinic locations needed clearer phone, hours, and appointment pathways',
      'Services and specialized therapies had to be easy for patients to scan before booking',
      'Award badges and review credibility needed stronger placement in the conversion journey',
      'The practice story needed to balance clinical care with the “aloha” brand promise',
      'Patient intake actions needed to connect clearly to request appointment and new patient forms'
    ],
    solutions: [
      ['Location-first structure', ['Clarified Aiea and Honolulu locations', 'Surfaced phone numbers and office hours', 'Created easier pathways to request an appointment']],
      ['Service education', ['Organized chiropractic treatment, Graston Technique, orthotics, and cold laser therapy', 'Clarified specialized therapy audiences', 'Connected common pain points to treatment options']],
      ['Trust and proof system', ['Elevated Hawaii’s Best and Island News award badges', 'Highlighted 5-star Google reviews and Yelp 4.9/5 proof', 'Strengthened provider story around Dr. Shaun Ohira and personalized care']],
      ['Patient conversion flow', ['Improved request-appointment visibility', 'Connected patient resources, insurance, and forms', 'Structured the site around fast decision-making for patients in pain']]
    ],
    gallery: [
      { label: 'Where Healing Meets Aloha hero', image: 'assets/clients/hawaii-case-hero.jpg', tone: 'lime' },
      { label: 'Hawaii Elite Chiropractic identity', image: 'assets/clients/hawaii-case-logo.png', tone: 'light' },
      { label: 'Award-winning chiropractic care', image: 'assets/clients/hawaii-case-shaun.jpg', tone: 'dark' },
      { label: 'Patient treatment proof', image: 'assets/clients/hawaii-case-treatment.jpeg', tone: 'sand' },
      { label: 'Hawaii’s Best 2024 badge', image: 'assets/clients/hawaii-case-best-2024.jpg', tone: 'lime' },
      { label: 'Island News Best of Hawaii badge', image: 'assets/clients/hawaii-case-island-news.png', tone: 'light' },
      { label: 'Hawaii’s Best 2023 badge', image: 'assets/clients/hawaii-case-best-2023.png', tone: 'sand' }
    ],
    nextId: 'abs'
  },
  abs: {
    index: '06',
    name: 'ABS French School',
    title: <>ABS French<br />School.</>,
    industry: 'French Immersion Preschool',
    engagement: '14 months',
    scope: 'Web, admissions, SEO, CRM',
    year: '2024 — 2025',
    website: 'https://absfrenchpreschool.com/',
    image: 'assets/clients/abs-case-hero.jpg',
    tone: 'dark',
    intro: [
      'Au Beau Séjour French Preschool is an Oakland French immersion preschool serving children ages 0 to 6 in a caring, safe environment. Its live site centers a 100% French immersion setting, whole-child learning, social emotional development, and the Éducation Nationale 2024 Program.',
      'Think Tank shaped the digital experience around parent confidence and admissions intent: clearer program discovery, campus storytelling, schedule-a-tour pathways, application flow, curriculum proof, reviews, and CRM follow-up.'
    ],
    resultsTitle: <>Admissions clarity,<br />built for families.</>,
    resultsCopy: 'The updated case study reflects the live ABS experience: French-speaking teachers, two Oakland campuses, daily gourmet meals, small classroom care, and a direct tour/application journey.',
    metrics: [
      ['0–6', '', 'Age range served from nursery through kindergarten'],
      ['100', '%', 'French immersion setting promoted by the school'],
      ['2', '', 'Oakland campuses in Leona Heights and Hoover Foster']
    ],
    problems: [
      'The school experience was warm and trusted, but parents needed faster proof of fit online',
      'Programs, curriculum, campuses, tuition, schedule, tours, and applications needed clearer paths',
      'The 100% French immersion promise and Éducation Nationale 2024 Program needed stronger placement',
      'Parent reviews, staff credibility, meals, student life, and campus environment were not fully carrying the conversion story',
      'Tour and application inquiries needed better capture, organization, and follow-up'
    ],
    solutions: [
      ['Parent-first positioning', ['Centered the story around global citizens, French immersion, and a caring Oakland environment', 'Clarified the whole-child philosophy and student life experience', 'Elevated French-speaking teachers, small classes, and daily gourmet meals']],
      ['Admissions journey', ['Built direct paths for Schedule a Tour and Application actions', 'Organized programs, curriculum, tuition, schedule, and campus details for parent research', 'Reduced friction between first visit, trust-building, and inquiry']],
      ['Campus and program storytelling', ['Showcased Mountain Campus in Leona Heights and West Campus in Hoover Foster', 'Used classroom, outdoor, meal, and student-life imagery to make the experience tangible', 'Connected nursery-to-kindergarten care with 100% French immersion']],
      ['SEO and CRM system', ['Improved local education search structure around French preschool and Oakland families', 'Created clearer lead capture and organization for admissions inquiries', 'Supported follow-up workflows for tour and application interest']]
    ],
    gallery: [
      { label: 'French immersion classroom experience', image: 'assets/clients/abs-case-hero.jpg', tone: 'dark' },
      { label: 'Storytime and whole-child learning', image: 'assets/clients/abs-case-storytime.jpg', tone: 'sand' },
      { label: 'Classroom play and social learning', image: 'assets/clients/abs-case-classroom.jpg', tone: 'light' },
      { label: 'Outdoor gardening and student life', image: 'assets/clients/abs-case-garden.jpg', tone: 'lime' },
      { label: 'Oakland campus environment', image: 'assets/clients/abs-case-campus.jpg', tone: 'light' },
      { label: 'Daily gourmet meal program', image: 'assets/clients/abs-case-meals.jpg', tone: 'sand' }
    ],
    nextId: 'sta'
  },
  sta: {
    index: '07',
    name: 'Straight Talk Advisor',
    title: <>Straight Talk<br />Advisor.</>,
    industry: 'Executive Advisory & Consulting',
    engagement: 'Launch phase',
    scope: 'Brand, web, advisory funnel',
    year: '2026',
    website: 'https://straighttalkadvisory.com/',
    image: 'assets/clients/sta-case-hero.jpg',
    tone: 'sand',
    intro: [
      'Straight Talk Advisory is a high-impact advisory offer for founders, executives, and scaling startups. The site positions Ardy Sobhani as a hands-on mentor for consumer-product CEOs and COOs who need to increase revenue, cut costs, and scale sustainably.',
      'Think Tank shaped the digital experience around direct executive trust: a clear waitlist funnel, founder credibility from Oru Kayak, operational playbooks, fractional CEO/COO advisory, workshops, and strategic growth systems.'
    ],
    resultsTitle: <>Executive clarity,<br />built to scale.</>,
    resultsCopy: 'The case study reflects the live Straight Talk offer: hands-on mentorship, proven consumer-product playbooks, Idea-to-IPO experience, operational systems, and a direct path to book a call or join the waitlist.',
    metrics: [
      ['15', '+', 'Years of consumer-product operating experience referenced on the site'],
      ['120', 'M', 'Revenue scale highlighted through the Oru Kayak growth story'],
      ['20', '%', 'Profitability benchmark promoted in the operating narrative']
    ],
    problems: [
      'A newly launched advisory brand needed to establish executive credibility quickly',
      'The offer had to explain who it serves: founders, CEOs, COOs, and scaling consumer-product teams',
      'Ardy Sobhani’s Oru Kayak experience needed to become a clear proof system, not just a biography',
      'Services across strategy, operations, pricing, manufacturing, partnerships, and workshops needed one coherent funnel',
      'Book-a-call and waitlist actions needed direct placement without overcomplicating the page'
    ],
    solutions: [
      ['Credibility-led positioning', ['Centered the promise around trusted executive coaching and proven playbooks', 'Connected Ardy Sobhani’s Oru Kayak operating background to founder trust', 'Clarified the customer: consumer-product CEO and COO teams']],
      ['Offer architecture', ['Organized advisory support around fractional COO/CEO work, growth strategy, operational systems, and market leadership', 'Turned service areas into practical business outcomes', 'Created a sharper bridge from pain points to advisory fit']],
      ['Conversion path', ['Simplified action into Book a call and Sign up for the Waitlist', 'Made the form ask for business URL, revenue, email, operating stage, and support needs', 'Reduced the page to a direct executive decision journey']],
      ['Proof and content system', ['Elevated Idea-to-IPO and manufacturing-scale experience', 'Highlighted revenue, profitability, and strategic alliance proof points', 'Used workshops and playbooks as repeatable productized advisory assets']]
    ],
    gallery: [
      { label: 'Executive advisory hero experience', image: 'assets/clients/sta-case-hero.jpg', tone: 'sand' },
      { label: 'Straight Talk Advisory identity', image: 'assets/clients/sta-case-logo.png', tone: 'light' },
      { label: 'Consumer-product operating playbook', image: 'assets/clients/sta-case-business.jpeg', tone: 'dark' },
      { label: 'Proven playbooks and mentorship', image: 'assets/clients/sta-case-playbook.png', tone: 'lime' },
      { label: 'Services and advisory structure', image: 'assets/clients/sta-case-services.jpg', tone: 'light' },
      { label: 'Growth and scale proof system', image: 'assets/clients/sta-case-growth.jpg', tone: 'sand' }
    ],
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
