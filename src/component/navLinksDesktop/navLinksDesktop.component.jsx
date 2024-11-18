import './navLinksDesktop.styles.css';

import NavLinksDesktopCollapsible from '../navLinksDesktopCollapsible/navLinksDesktopCollapsible.component';

import { Link } from 'react-router-dom';
import {
  COLLABSIBLE_NAV_LINKS_ARRAY,
  INLINE_LINKS_ARRAY,
} from '../../utils/navigationLinks.utils';

function NavLinksDesktop() {
  return (
    <ul className='nav-links-desktop'>
      {COLLABSIBLE_NAV_LINKS_ARRAY.map((link) => (
        <NavLinksDesktopCollapsible key={link.id} link={link} />
      ))}

      {/* ************************* */}

      {INLINE_LINKS_ARRAY.map((link) => (
        <li className='nav-link-desktop' key={link.id}>
          <Link to={`/${link.name.replaceAll(' ', '-')}`}>{link.name}</Link>
        </li>
      ))}
      {/* ************************* */}
    </ul>
  );
}

export default NavLinksDesktop;
