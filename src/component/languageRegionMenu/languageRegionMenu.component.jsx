import { useState } from 'react';

import { ReactComponent as LanguagesSvg } from '../../assets/languagesIcon.svg';

import { ReactComponent as GlobalSvg } from '../../assets/globalIcon.svg';

import Animation from '../animation/animation.component';

import {
  LANGUAGES_ARRAY,
  REGIONS_ARRAY,
} from '../../utils/navigationLinks.utils';

import AnimatedList from '../animatedList/animatedList.compnent';

import './languageRegionMenu.styles.css';
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
        <Animation state={activeList === 'language'} slide={slide}>
          <AnimatedList list={LANGUAGES_ARRAY} />
        </Animation>
      </div>
      <div className='region' onClick={() => toggleList('region')}>
        <button className='btn'>
          <GlobalSvg />
          <p>Global</p>
        </button>
        <Animation state={activeList === 'region'} slide={slide}>
          <AnimatedList list={REGIONS_ARRAY} />
        </Animation>
      </div>
    </div>
  );
}

export default LanguageRegionMenu;
