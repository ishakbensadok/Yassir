import MainHero from '../../component/mainHero/mainHero.component';

import AllInOneApp from '../../component/allInOneApp/allInOneApp.component';

import OurCoreValuesSection from '../../component/ourCoreValuesSection/ourCoreValuesSection.component';

import PartnerUp from '../../component/partnerUp/partnerUp.component';

import B2bSection from '../../component/b2bSection/b2bSection.component';

import Banner from '../../component/banner/banner.component';

import CallToAction from '../../component/callToAction/callToAction.component';
const link =
  'https://play.google.com/store/apps/details?id=com.yatechnologies.yassir_rider';

const Home = () => {
  return (
    <main className='home'>
      <MainHero />
      <AllInOneApp />
      <OurCoreValuesSection />
      <PartnerUp />
      <B2bSection />
      <Banner
        title='Get Started'
        description='Start using our services by downloading Yassir'
      >
        <CallToAction link={link}>Download the app</CallToAction>
      </Banner>
    </main>
  );
};

export default Home;
