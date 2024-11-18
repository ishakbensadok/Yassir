import './banner.styles.css';

import Section from '../section/section.compnent';

function Banner({ title = '', description = '', children }) {
  return (
    <Section className='banner-section'>
      <div className='banner-container'>
        <div className='banner'>
          <h4 className='banner__title'>{title}</h4>
          <p className='banner__description'>{description}</p>
          <div className='call-to-action-container'>{children}</div>
        </div>
      </div>
    </Section>
  );
}

export default Banner;
