import './mainHeroDesktop.styles.css';

import { IMAGES_PER_SLIDE_TYPE_DESKTOP } from '../../utils/sliderImages.utils';

import Phone from '../phone/phone.component';
import MainHeroHeader from '../mainHeroHeader/mainHeroHeader.component';

function Slider({ type = 'slide-down' }) {
  const images = IMAGES_PER_SLIDE_TYPE_DESKTOP.find(
    (i) => i.type === type
  )?.images;

  return (
    <div>
      {Array.from({ length: images.length }, (_, i) => (
        <div className={`slide ${type}`} key={`${images.at(i)}`}>
          {Array.from({ length: images.length }, (_, i) => (
            <img src={`${images.at(i)}`} alt='' key={`${images.at(i)}`} />
          ))}
        </div>
      ))}
    </div>
  );
}

function MainHeroDesktop() {
  return (
    <section className='main-hero-desktop'>
      <div className='main-hero-desktop__left'>
        <MainHeroHeader />
      </div>
      <div className='main-hero-desktop__right'>
        <div className='sliders'>
          <Slider type='slide-down' />
          <Slider type='slide-up' />
          <Slider type='slide-down-fast' />
        </div>
        <div className='main-hero-desktop__phone-container'>
          <Phone />
        </div>
      </div>
    </section>
  );
}

export default MainHeroDesktop;
