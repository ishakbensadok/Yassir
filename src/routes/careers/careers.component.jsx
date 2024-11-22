import HeroCareers from '../../component/heroCareers/heroCareers.component';
import CareersAboutUs from '../../component/careersAboutUs/careersAboutUs.component';
import Teams from '../../component/teams/teams.component';
import CompanyStatistcs from '../../component/companyStatistcs/companyStatistcs.component';
import Statistics from '../../component/statistics/statistics.component';

function Careers() {
  return (
    <main className='careers'>
      <HeroCareers />
      <CareersAboutUs />
      <Teams />
      <CompanyStatistcs />
      <Statistics />
    </main>
  );
}
export default Careers;
