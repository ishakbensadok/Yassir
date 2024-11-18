import React, { useState, useEffect } from 'react';
import './phone.styles.css';
import { ReactComponent as StatusBarSvg } from '../../assets/phonStatusBar.svg';
import { ReactComponent as LogoSvg } from '../../assets/logoWhiteIcon.svg';

import CallToAction from '../callToAction/callToAction.component';
import LazyLoading from '../lazyLoading/lazyLoading.component';

const Phone = ({ content, children }) => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='phone'>
      <div className='phone__camera'></div>
      <div className='phone__content'>
        {!content ? (
          <>
            <header className='phone__content__header'>
              <span className='curr-time'>{currentTime}</span>
              <StatusBarSvg />
            </header>
            <div className='phone__content__body'>
              <div className='brand'>
                <div className='brand__logo'>
                  <LogoSvg />
                </div>
                <div className='brand__name-container'>
                  <span className='brand__full-name'>
                    Yassir - Ride, Eat & Shop
                  </span>
                  <span className='brand__name'>Yassir</span>
                </div>
              </div>

              <div className='status-container'>
                <div className='status'>
                  <div className='status__bold'>4.5 ★</div>
                  <div className='status__grey'>148K reviews</div>
                </div>
                <div className='status'>
                  <div className='status__bold'>10M+</div>
                  <div className='status__grey'>downloads</div>
                </div>
              </div>

              <CallToAction
                link={
                  'https://play.google.com/store/apps/details?id=com.yatechnologies.yassir_rider'
                }
                type={'stretched'}
              >
                Install
              </CallToAction>
              <div className='preview'>
                <p className='preview__label'>preview</p>

                <div className='preview__imgs'>
                  <LazyLoading src='phone-image-en-1.webp' />
                  <LazyLoading src='phone-image-en-2.webp' />
                  <LazyLoading src='phone-image-en-3.webp' />
                </div>
              </div>
            </div>
            <footer className='phone__content__footer'>
              Move around everywhere with Yassir
            </footer>
          </>
        ) : (
          // <img src={content} alt='' />
          <LazyLoading src={content} />
        )}
      </div>

      <div className='phone__btn'></div>
      <div className='phone__btn phone__btn-left-1'></div>
      <div className='phone__btn phone__btn-left-2'></div>
      <div className='phone__btn-right'></div>
      {children}
    </div>
  );
};

export default Phone;
