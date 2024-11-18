import Section from '../section/section.compnent';
import { useMediaQuery } from 'react-responsive';

import { FLEET_SYSTEM_ARRAY } from '../../utils/taps.utils';
import Taps from '../taps/taps.component';
import LazyLoading from '../lazyLoading/lazyLoading.component';
import './fleetSystem.styles.css';
import { useState } from 'react';
function FleetSystem() {
  const [activeTap, setActiveTap] = useState(0);
  const isDesktop = useMediaQuery({ query: '(min-width: 640px)' });

  const imgSrc = isDesktop
    ? FLEET_SYSTEM_ARRAY[activeTap].imageDes
    : FLEET_SYSTEM_ARRAY[activeTap].imageMop;

  return (
    <Section className='fleet-system'>
      <h2 className='fleet-system__heading'>
        A complete <span>fleet system</span>
        <br /> for your business
      </h2>

      <Taps tapsContent={FLEET_SYSTEM_ARRAY} onClick={setActiveTap} />

      <div className='fleet-system__img-container'>
        <LazyLoading src={imgSrc} />
      </div>
    </Section>
  );
}

export default FleetSystem;
