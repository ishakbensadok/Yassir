import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Logo from '../logo/logo.component';
import MenuIcon from '../menuIcon/menuIcon.component';

import LanguageRegionMenu from '../languageRegionMenu/languageRegionMenu.component';
import NavLinksDesktop from '../navLinksDesktop/navLinksDesktop.component';

import NavigationMobile from '../navigationMobile/navigationMobile.component';
import './navigationDesktop.styles.css';

function NavigationDesktop() {
  const [isMenuExtended, setIsMenuExtended] = useState(false);
  const location = useLocation(); // Get the current route location

  const isNotHome = location.pathname !== '/';

  return (
    <>
      <header className={`header-nav-des ${isNotHome ? 'is-not-home' : ''}`}>
        <nav className='nav-des'>
          <Logo type={isNotHome ? 'white' : ''} />

          <MenuIcon
            onClick={() =>
              setIsMenuExtended((isMenuExtended) => !isMenuExtended)
            }
          />
          <NavLinksDesktop />

          <LanguageRegionMenu />

          {isMenuExtended && <NavigationMobile />}
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default NavigationDesktop;
