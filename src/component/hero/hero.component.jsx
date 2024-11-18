import Section from '../section/section.compnent';

import LazyLoading from '../lazyLoading/lazyLoading.component';

import './hero.styles.css';

function Hero({ heroImgUrl, order = 1, children }) {
  return (
    <Section className='hero-section'>
      <div className='hero'>
        <div className='hero__left'>
          <LazyLoading src={heroImgUrl} />
        </div>
        <div className='hero__right' style={{ order: order }}>
          {children}
        </div>
      </div>
    </Section>
  );
}

export default Hero;
