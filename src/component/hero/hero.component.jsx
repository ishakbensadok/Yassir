import Section from '../section/section.compnent';

import './hero.styles.css';

function Hero({ heroImgUrl, order = 1, children }) {
  return (
    <Section className='hero-section'>
      <div className='hero'>
        <div className='hero__left'>
          <img src={heroImgUrl} alt='' />
        </div>
        <div className='hero__right' style={{ order: order }}>
          {children}
        </div>
      </div>
    </Section>
  );
}

export default Hero;
