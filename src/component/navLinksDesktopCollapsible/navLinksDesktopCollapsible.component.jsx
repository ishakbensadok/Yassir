import { useState } from 'react';

import Animation from '../animation/animation.component';

import CollapsibleContainer from '../collapsibleContainer/collapsibleContainer.component';

import AnimatedList from '../animatedList/animatedList.compnent';

function NavLinksDesktopCollapsible({ link }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <li
      className='nav-link-desktop'
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <CollapsibleContainer>{link.label}</CollapsibleContainer>

      <Animation state={isHover} slide='up'>
        <AnimatedList list={link.subLinks} />
      </Animation>
    </li>
  );
}

export default NavLinksDesktopCollapsible;
