import { COMPANY__STATISTICS } from '../../utils/companyData.utils';
import Section from './../section/section.compnent';

import './companyStatistcs.styles.css';

function CompanyStatistcs() {
  return (
    <Section className='company-statistcs-section'>
      <div className='company-statistcs'>
        <h2 className='company-statistcs__heading'>Company statistics</h2>

        <div className='statistics__info'>
          {COMPANY__STATISTICS.map((s) => (
            <div className='statistics__info__item'>
              <div className='statistics__info__item__svg-container'>
                {s.svg}
              </div>
              <div className='statistics__info__item__content'>
                <p> {s.value} </p>
                <h4>{s.title} </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default CompanyStatistcs;
