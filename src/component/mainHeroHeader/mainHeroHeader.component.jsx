import './mainHeroHeader.styles.css';

import CallToAction from '../callToAction/callToAction.component';
function MainHeroHeader() {
  return (
    <div className='main-hero__header'>
      <h1 className='main-hero__title'>
        The super app <br /> designed to make
        <span className='main-hero__title__primary'>your life easier</span>
      </h1>

      <CallToAction
        link={
          'https://play.google.com/store/apps/details?id=com.yatechnologies.yassir_rider'
        }
      >
        Order now
      </CallToAction>
    </div>
  );
}

export default MainHeroHeader;
