import Hero from '../hero/hero.component';
import { ReactComponent as BusinessSvg } from '../../assets/businessIcon.svg';

import CallToAction from '../callToAction/callToAction.component';

function HeroBusiness() {
  const heroImgUrl = 'business.webp';

  return (
    <Hero heroImgUrl={heroImgUrl}>
      <div className='tag-badge'>
        <BusinessSvg className='tag-badge__svg' />
        <p className='tag-badge__text'>Business</p>
      </div>
      <h1 className='hero__heading'>Yassir for Business</h1>
      <p className='hero__description'>
        The smartest way to manage your team’s transporation needs!
      </p>
      <div className='hero__call-to-action'>
        <CallToAction link='https://go-business.yassir.com/auth/register'>
          sign up
        </CallToAction>
        <CallToAction
          link='https://go-business.yassir.com/auth/login'
          type='inverted'
        >
          login
        </CallToAction>
      </div>
    </Hero>
  );
}

export default HeroBusiness;
