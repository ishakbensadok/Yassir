import './languageRegionMenu.styles.css';
import { ReactComponent as LanguagesSvg } from '../../assets/languagesIcon.svg';
import { ReactComponent as GlobalSvg } from '../../assets/globalIcon.svg';

import AnimatedList from '../animatedList/animatedList.component';

import {
  LANGUAGES_ARRAY,
  REGIONS_ARRAY,
} from '../../utils/navigationLinks.utils';
import { useState } from 'react';

function LanguageRegionMenu({ slide = 'up' }) {
  const [activeList, setActiveList] = useState(null); // Track which list is active

  const toggleList = (list) =>
    setActiveList((prev) => (prev === list ? null : list));

  return (
    <div className='language-region-menu'>
      <div className='language' onClick={() => toggleList('language')}>
        <button className='btn'>
          <LanguagesSvg />
          <p>English</p>
        </button>
        <AnimatedList
          state={activeList === 'language'}
          list={LANGUAGES_ARRAY}
          slide={slide}
        />
      </div>
      <div className='region' onClick={() => toggleList('region')}>
        <button className='btn'>
          <GlobalSvg />
          <p>Global</p>
        </button>
        <AnimatedList
          state={activeList === 'region'}
          list={REGIONS_ARRAY}
          slide={slide}
        />
      </div>
    </div>
  );
}

export default LanguageRegionMenu;
