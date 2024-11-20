import HeroCareers from '../../component/heroCareers/heroCareers.component';
import CareersAboutUs from '../../component/careersAboutUs/careersAboutUs.component';
import Teams from '../../component/teams/teams.component';
function Careers() {
  return (
    <main className='careers'>
      <HeroCareers />
      <CareersAboutUs />
      <Teams />
    </main>
  );
}

export default Careers;
