import CollapsibleContainer from '../collapsibleContainer/collapsibleContainer.component';
import { useMediaQuery } from 'react-responsive';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './navLinksCollapsible.styles.css';

function NavLinksCollapsible({ link }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  useEffect(() => {
    if (isDesktop) {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  }, [isDesktop]);

  const handleClick = () =>
    setIsExpanded((isExpanded) => (!isDesktop ? !isExpanded : true));
  return (
    <>
      <li className={`nav-link`}>
        <CollapsibleContainer
          onClick={handleClick}
          className={isExpanded ? 'expanded' : ''}
        >
          {link.label}
        </CollapsibleContainer>

        {isExpanded && (
          <ul>
            {link.subLinks.map((l) => (
              <li className='nav-link  sub-nav-link' key={l.id}>
                <Link to={`${l.url}`}>{l.label}</Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    </>
  );
}

export default NavLinksCollapsible;
