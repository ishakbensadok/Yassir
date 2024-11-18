import './oneAppDetailsRounded.styles.css';
import { useMediaQuery } from 'react-responsive';

import { useState } from 'react';

import { ReactComponent as LeftArrowSvg } from '../../assets/leftArrowIcon.svg';
import { ReactComponent as RightArrowSvg } from '../../assets/rightArrowIcon.svg';

function OneAppDetailsRounded({ detailsArray }) {
  const isDesktop = useMediaQuery({ query: '(min-width: 640px)' });

  return isDesktop ? (
    <RoundedContainer detailsArray={detailsArray} />
  ) : (
    <Slider detailsArray={detailsArray} key={detailsArray[0].id} />
  );
}

function RoundedContainer({ detailsArray }) {
  return (
    <div className='rounded-container'>
      {detailsArray.map((d) => (
        <div className='rounded' key={d.id}>
          <h4 className='rounded__title'>{d.title} </h4>
          <p className='rounded__description'>{d.description} </p>
        </div>
      ))}
    </div>
  );
}

function Slider({ detailsArray }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const length = detailsArray.length;

  const handleRightClick = () =>
    setCurrentSlide((currentSlide) =>
      length > currentSlide + 1 ? currentSlide + 1 : 0
    );
  const handleLeftClick = () =>
    setCurrentSlide((currentSlide) =>
      currentSlide > 0 ? currentSlide - 1 : length - 1
    );

  return (
    <div className='slider-container'>
      <div className='slider'>
        {detailsArray.map((d) => (
          <div
            className='slide'
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            key={d.id}
          >
            <div className='rounded'>
              <h4 className='rounded__title'>{d.title} </h4>
              <p className='rounded__description'>{d.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='controls'>
        <button className='controls__btn' onClick={handleLeftClick}>
          <LeftArrowSvg />
        </button>
        {detailsArray.map((d, i) => (
          <div
            className={`controls__dots ${currentSlide === i ? 'active' : ''}`}
            key={d.id}
          ></div>
        ))}
        <button className='controls__btn' onClick={handleRightClick}>
          <RightArrowSvg />
        </button>
      </div>
    </div>
  );
}
export default OneAppDetailsRounded;
