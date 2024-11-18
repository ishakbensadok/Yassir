import './partnerUp.styles.css';

import {
  PARTNER_UP_TAPS_CONTENTS,
  PARTNER_UP_ARRAY,
} from '../../utils/taps.utils';
import Section from '../section/section.compnent';
import CallToAction from '../callToAction/callToAction.component';
import Taps from '../taps/taps.component';
import LazyLoading from '../lazyLoading/lazyLoading.component';
import { useState } from 'react';
function PartnerUp() {
  const [activeTap, setActiveTap] = useState(0);

  return (
    <Section className='partner-up'>
      <h2 className='partner-up__heading'>
        Let’s <span>partner up</span>
      </h2>

      <Taps
        tapsContent={PARTNER_UP_TAPS_CONTENTS}
        onClick={setActiveTap}
        shrink={true}
      />

      <div className='partner-up__contents-container'>
        {PARTNER_UP_ARRAY[activeTap].contents.map((c) => (
          <div className='partner-up__contents' key={c.id}>
            <LazyLoading src={c.image} />
            <div className='partner-up__content'>
              <div className='circle'>
                {c.rounded.svgComponent}
                <p className='circle__text'> {c.rounded.content}</p>
              </div>
              <h3 className='partner-up__content__heading'>{c.title}</h3>

              <div className='partner-up__content__details'>
                {c.details.map((d) => (
                  <div className='detail' key={d.id}>
                    <h4 className='detail__heading'> {d.title} </h4>
                    <p className='detail__description'> {d.description} </p>
                  </div>
                ))}
              </div>

              <CallToAction link={c.callToActionBtn.link}>
                {c.callToActionBtn.content}
              </CallToAction>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default PartnerUp;
