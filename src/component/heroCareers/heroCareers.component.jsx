import Hero from '../hero/hero.component';

import CallToAction from '../callToAction/callToAction.component';
function HeroCareers() {
  const heroImgUrl = 'main-block-career.webp';
  return (
    <Hero heroImgUrl={heroImgUrl} order={-1}>
      <h1 className='hero__heading'>
        Start your career with
        <span className='hero__heading__highlighted'> Yassir</span>
      </h1>
      <p className='hero__description'>
        Join a diverse team dedicated to impacting change to the everyday lives
        of its customers.
      </p>

      <div className='hero__call-to-action'>
        <CallToAction link='https://yassir.com/career/jobs'>
          join them
        </CallToAction>
      </div>
    </Hero>
  );
}

export default HeroCareers;
