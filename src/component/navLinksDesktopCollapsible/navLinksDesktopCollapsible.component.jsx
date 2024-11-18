import { useState } from 'react';

import AnimatedList from '../animatedList/animatedList.component';
import CollapsibleContainer from '../collapsibleContainer/collapsibleContainer.component';

function NavLinksDesktopCollapsible({ link }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <li
      className='nav-link-desktop'
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <CollapsibleContainer>{link.label}</CollapsibleContainer>

      <AnimatedList state={isHover} list={link.subLinks} />
    </li>
  );
}

export default NavLinksDesktopCollapsible;
