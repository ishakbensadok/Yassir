import React, { useState } from 'react';

import { useIntersectionObserver } from '../../hooks/useIntersectionObserver.hook';
import './lazyLoading.styles.css';
// ////
const LazyLoading = ({ src }) => {
  const [name] = src.split('.');
  const placeHolder = `${name}-placeholder.jpg`;

  const [imageSrc, setImageSrc] = useState(placeHolder);
  const [isLoaded, setIsLoaded] = useState(false);

  const callback = () => setImageSrc(src);
  const { ref } = useIntersectionObserver(callback);

  const handleImageLoad = () => imageSrc === src && setIsLoaded(true);

  return (
    <img
      ref={ref}
      src={imageSrc}
      alt=''
      onLoad={imageSrc === src ? handleImageLoad : undefined}
      style={{
        filter: isLoaded ? 'blur(0px)' : 'blur(15px)',
        transition: 'filter 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      }}
      className='lazy-loading-img'
    />
  );
};

export default LazyLoading;
