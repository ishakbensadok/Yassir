import HeroBusiness from '../../component/heroBusiness/heroBusiness.component';

import FleetSystem from '../../component/fleetSystem/fleetSystem.component';

import Features from '../../component/features/features.component';

import Customers from '../../component/customers/customers.component';

import Statistics from '../../component/statistics/statistics.component';

import CallToAction from '../../component/callToAction/callToAction.component';

import Banner from '../../component/banner/banner.component';

function Business() {
  return (
    <main className='business'>
      <HeroBusiness />
      <FleetSystem />
      <Features />
      <Customers />
      <Statistics className='grey-dark' imageSrc='numbers-image.webp' />
      <Banner
        title='Yassir for business'
        description='Click the button bellow to use our tailored solutions and grow your business'
      >
        <CallToAction
          type='inverted'
          link='https://go-business.yassir.com/auth/register'
        >
          Sign Up
        </CallToAction>
        <CallToAction link='https://go-business.yassir.com/auth/login'>
          Sign In
        </CallToAction>
      </Banner>
    </main>
  );
}

export default Business;
