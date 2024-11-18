import './navLinks.styles.css';
import { Link } from 'react-router-dom';

import NavLinksCollapsible from '../navLinksCollapsible/navLinksCollapsible.component';

function NavLinks({ collabsibleLinks = [], inlineLink = [] }) {
  if (collabsibleLinks.length === 0 && inlineLink.length === 0) return;
  return (
    <ul className='nav-links'>
      {collabsibleLinks.map((link) => (
        <NavLinksCollapsible key={link.id} link={link} />
      ))}

      {inlineLink.map((link) => (
        <li className='nav-link' key={link.id}>
          <Link to={`${link.url}`}> {link.label}</Link>
        </li>
      ))}
    </ul>
  );
}
export default NavLinks;
