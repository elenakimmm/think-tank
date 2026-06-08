/* global React, ReactDOM, Nav, Footer,
   LandingPage, WorksPage, CaseStudyPage, AboutPage, ContactPage */
const { useState, useEffect } = React;

function App() {
  const [route, setRoute] = useState('home');
  const [transitioning, setTransitioning] = useState(false);

  const go = (next) => {
    if (next === route) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setTransitioning(true);
    setTimeout(() => {
      setRoute(next);
      window.scrollTo({ top: 0, behavior: 'instant' });
      setTransitioning(false);
    }, 220);
  };

  const caseId = route.startsWith('case:') ? route.slice(5) : 'aplus';

  let Page;
  switch (route) {
    case 'works':   Page = WorksPage;     break;
    case 'about':   Page = AboutPage;     break;
    case 'contact': Page = ContactPage;   break;
    default:
      Page = route.startsWith('case') ? CaseStudyPage : LandingPage;
  }

  return (
    <React.Fragment>
      <Nav route={route} go={go} />
      <main
        style={{
          opacity: transitioning ? 0 : 1,
          transition: 'opacity 0.22s ease',
        }}
      >
        <Page go={go} caseId={caseId} />
        <Footer go={go} />
      </main>
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
