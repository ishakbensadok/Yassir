import { useState } from 'react';

import { ReactComponent as FavIconSvg } from '../../assets/favIcon.svg';
import OneAppDetailsRounded from '../oneAppDetailsRounded/oneAppDetailsRounded.component';

import CallToAction from '../callToAction/callToAction.component';
import { ONE_APP_ARRAY, ONE_APP_TAPS_CONTENTS } from '../../utils/taps.utils';

import LazyLoading from '../lazyLoading/lazyLoading.component';
import Section from '../section/section.compnent';
import Phone from '../phone/phone.component';

import Taps from '../taps/taps.component';

import './allInOneApp.styles.css';
//TEMP
const link =
  'https://play.google.com/store/apps/details?id=com.yatechnologies.yassir_rider';

function AllInOneApp() {
  const [activeTap, setActiveApp] = useState(0);

  const primaryTitle = ONE_APP_ARRAY.at(activeTap).tapContent.split(' ').at(0);
  const secondryTitle = ONE_APP_ARRAY.at(activeTap).tapContent.split(' ').at(1);
  const description = ONE_APP_ARRAY.at(activeTap).description;
  const detailsArray = ONE_APP_ARRAY.at(activeTap).details;
  const image = ONE_APP_ARRAY.at(activeTap).image;

  return (
    <Section className='one-app'>
      <header>
        <h2 className='one-app__heading'>
          All your <span>needs</span> in <span>one</span> app
        </h2>
      </header>
      {/* // */}
      <Taps onClick={setActiveApp} tapsContent={ONE_APP_TAPS_CONTENTS} />
      {/* // */}

      <div className='one-app__body'>
        <div className='one-app__body__phone'>
          <Phone content={image}>
            <figure className='qr-code-container'>
              <LazyLoading className='qr-code' src='qrCode.webp' />
              <FavIconSvg />
            </figure>
          </Phone>
        </div>
        <div className='one-app__body__details'>
          <div className='one-app__details__title__description-container'>
            <h3 className='one-app__details__title'>
              <span> {primaryTitle} </span>
              {secondryTitle}
            </h3>

            <p className='one-app__details__description'> {description} </p>
          </div>
          {/* //// */}
          <OneAppDetailsRounded detailsArray={detailsArray} />
          {/* //// */}
          {secondryTitle.toLowerCase() === 'ride' && (
            <CallToAction link={link} type={'inverted'}>
              download the app
            </CallToAction>
          )}
        </div>
      </div>
    </Section>
  );
}

export default AllInOneApp;
