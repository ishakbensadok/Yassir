import './customers.styles.css';
import Section from '../section/section.compnent';
import CallToAction from '../callToAction/callToAction.component';

import { LOGOS } from '../../utils/customers.utils';

function Customers() {
  return (
    <Section className='customers-section'>
      <div className='customers'>
        <div className='customers__header'>
          <h2 className='customers__header__heading'>
            Our amazing <span>Customers...</span>
          </h2>
          <CallToAction link='https://go-business.yassir.com/auth/register'>
            join them
          </CallToAction>
        </div>
        <picture className='customers__logos'>
          {LOGOS.map((l) => (
            <img src={l.img} alt={l.img.split('.').at(0)} key={l.img} />
          ))}
        </picture>
      </div>
    </Section>
  );
}

export default Customers;
