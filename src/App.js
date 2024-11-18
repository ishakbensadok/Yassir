import { Routes, Route, useLocation } from 'react-router-dom';

import NavigationDesktop from './component/navigationDesktop/navigationDesktop.component';

import ScrollToTop from './component/scrollToTop/scrollToTop.component';

import Home from './routes/home/home.component';

import Business from './routes/business/business.component';

import Careers from './routes/careers/careers.component';

import Footer from './component/footer/footer.component';

import NotFound from './component/notFound/notFound.component';

import { ALL_NAV_LINKS } from './utils/navigationLinks.utils';

import { useEffect } from 'react';

function HandleNotFound() {
  const location = useLocation();

  const pathname = location.pathname.replaceAll('/', '');

  const isWorkingOnIt = ALL_NAV_LINKS.includes(pathname);

  return (
    <NotFound
      message={isWorkingOnIt ? 'Coming Soon ...' : '404 - Page Not Found'}
    />
  );
}

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location]);

  return (
    <Routes>
      <Route
        path='/'
        element={
          <>
            <NavigationDesktop />
            <Footer />
            <ScrollToTop />
          </>
        }
      >
        <Route index element={<Home />} />
        <Route path='business' element={<Business />} />
        <Route path='Career' element={<Careers />} />
        <Route path='*' element={<HandleNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
