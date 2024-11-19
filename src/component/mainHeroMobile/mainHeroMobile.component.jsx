import { IMAGES_SLIDE_MOBILE } from '../../utils/sliderImages.utils';

import Phone from '../phone/phone.component';
import MainHeroHeader from '../mainHeroHeader/mainHeroHeader.component';
import './mainHeroMobile.styles.css';

function Slider() {
  return (
    <div className='slider-mobile'>
      {IMAGES_SLIDE_MOBILE.map((src) => (
        <div className='slider-mobile__wrapper' key={src}>
          <img src={src} alt='' />
        </div>
      ))}
    </div>
  );
}
function MainHeroMobile() {
  return (
    <section className='main-hero-mobile'>
      <div className='slider-mobile-wrapper'>
        <Slider />
        <Slider />
      </div>
      <MainHeroHeader />
      <div className='phone-container'>
        <Phone />
      </div>
    </section>
  );
}

export default MainHeroMobile;
