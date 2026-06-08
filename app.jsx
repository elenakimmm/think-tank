/* global React, ReactDOM, Nav, Footer,
   LandingPage, WorksPage, CaseStudyPage, AboutPage, ContactPage */
const { useState, useEffect } = React;

function App() {
  const getRouteFromLocation = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('route') || window.location.hash.replace(/^#/, '') || 'home';
  };
  const getRouteUrl = (next) => next === 'home' ? window.location.pathname : `${window.location.pathname}?route=${encodeURIComponent(next)}`;

  const [route, setRoute] = useState(getRouteFromLocation);
  const [transitioning, setTransitioning] = useState(false);

  const renderRoute = (next) => {
    setTransitioning(true);
    setTimeout(() => {
      setRoute(next);
      window.scrollTo({ top: 0, behavior: 'instant' });
      setTransitioning(false);
    }, 220);
  };

  const changeRoute = (next, pushHistory = true) => {
    if (next === route) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (pushHistory) {
      window.location.assign(getRouteUrl(next));
      return;
    }
    renderRoute(next);
  };

  useEffect(() => {
    const handleHashChange = () => {
      renderRoute(getRouteFromLocation());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const go = (next) => changeRoute(next, true);

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
