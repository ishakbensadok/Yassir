import { ReactComponent as LogoSvg } from '../../assets/favIcon.svg';

import './scrollToTop.styles.css';

import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 800) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    setIsScrollingUp(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    setTimeout(() => {
      setIsScrollingUp(false);
    }, 500);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className='scroll-to-up'
          style={{
            bottom: isScrollingUp ? '150px' : '50px',
            opacity: isScrollingUp || !isVisible ? '0' : '1',
          }}
          onClick={scrollToTop}
        >
          <LogoSvg />
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
