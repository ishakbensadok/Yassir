import { useRef, useEffect, useState, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';

import './taps.styles.css';

const INITIAL_DIMENSIONS = {
  height: 0,
  width: 0,
  left: 0,
  top: 0,
};

function Taps({
  onClick = () => null,
  defaultActiveTap = 0,
  tapsContent = [],
  shrink = false,
}) {
  const elementRefs = useRef([]);

  const [dimensions, setDimensions] = useState(INITIAL_DIMENSIONS);

  const [activeTap, setActiveApp] = useState(defaultActiveTap);

  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  const handleTapClick = useCallback(
    (i) => {
      setActiveApp(i);
      onClick(i);
    },
    [onClick]
  );

  const updateDimensions = useCallback(() => {
    const currentElement = elementRefs.current[activeTap];

    if (currentElement) {
      const { offsetHeight, offsetWidth, offsetLeft, offsetTop } =
        currentElement;
      setDimensions({
        height: offsetHeight,
        width: offsetWidth,
        left: offsetLeft,
        top: offsetTop,
      });
    }
  }, [activeTap]);

  useEffect(() => {
    updateDimensions();

    const handleResize = () => updateDimensions();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [activeTap, isDesktop, updateDimensions]);

  ///////////////////////////////
  ///////////////////////////////
  ///////////////////////////////
  return (
    <div className='taps'>
      {tapsContent.map((tab, i) => (
        <button
          className={`tap ${activeTap === i ? 'active' : ''}`}
          onClick={() => handleTapClick(i)}
          key={tab.id}
          ref={(el) => (elementRefs.current[i] = el)}
        >
          {shrink && !isDesktop
            ? tab.tapContent.split(' ').at(0)
            : tab.tapContent}
        </button>
      ))}
      <div
        className='active-tap'
        style={{
          height: dimensions.height,
          width: dimensions.width,
          left: dimensions.left,
          top: dimensions.top,
        }}
      ></div>
    </div>
  );
}

export default Taps;
