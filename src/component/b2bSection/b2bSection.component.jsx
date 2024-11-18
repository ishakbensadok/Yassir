import './b2bSection.styles.css';
import { ReactComponent as B2bSvg } from '../../assets/b2bIcon.svg';

import CallToAction from '../callToAction/callToAction.component';
import Section from '../section/section.compnent';

import LazyLoading from '../lazyLoading/lazyLoading.component';
import { B2B_SOLUTIONS_DETAILS } from '../../utils/b2b.utils';

function B2bSection() {
  return (
    <Section className='b2b-section'>
      <div className='b2b'>
        <div className='b2b__img-container'>
          {/* <img src='b2bImg.webp' alt='' /> */}
          <LazyLoading src='b2b.png' />
          <p>Moving ahead together</p>
        </div>
        <div className='b2b__solutions'>
          <header>
            <div className='b2b__solutions__rounded'>
              <B2bSvg />
              <p>B2B SOLUTIONS | DISTRIBUTION</p>
            </div>
            <h3 className='b2b__solutions__heading'>
              A complete fleet system for your business
            </h3>
          </header>

          <div className='b2b__solutions__details'>
            {B2B_SOLUTIONS_DETAILS.map((b) => (
              <div className='b2b__solutions__detail' key={b.id}>
                <h4 className='title'>{b.title}</h4>
                <p className='description'>{b.description}</p>
              </div>
            ))}
          </div>

          <CallToAction link={'https://yassir.com/en/business'}>
            Visit Yassir Business
          </CallToAction>
        </div>
      </div>
    </Section>
  );
}

export default B2bSection;
