import './navigationMobile.styles.css';

import LanguageRegionMenu from '../languageRegionMenu/languageRegionMenu.component';
import NavLinks from '../navLinks/navLinks.component';

import {
  COLLABSIBLE_NAV_LINKS_ARRAY,
  INLINE_LINKS_ARRAY,
} from '../../utils/navigationLinks.utils';

function NavigationMobile() {
  return (
    <nav className='nav-mob'>
      <NavLinks
        collabsibleLinks={COLLABSIBLE_NAV_LINKS_ARRAY}
        inlineLink={INLINE_LINKS_ARRAY}
      />
      <LanguageRegionMenu />
    </nav>
  );
}
export default NavigationMobile;
