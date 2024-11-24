import { useState } from 'react';
import './statisticsItem.styles.css';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver.hook';

function StatisticsItem({ statistic }) {
  const { title, description, maxValue } = statistic;
  const [value, setValue] = useState(0);
  const fullTitle = `${value}${title}`;

  const callback = () => {
    const increment = Math.ceil(maxValue / 500);

    const animateCount = () => {
      setValue((prevValue) => {
        if (prevValue < maxValue) {
          requestAnimationFrame(animateCount);
          return Math.min(prevValue + increment, maxValue);
        }
        return prevValue;
      });
    };
    requestAnimationFrame(animateCount);
  };

  const { ref } = useIntersectionObserver(callback, {
    root: null,
    rootMargin: '-200px',
    threshold: 0,
  });

  return (
    <div className='statistics__item' ref={ref}>
      <h3>{fullTitle}</h3>
      <p>{description}</p>
    </div>
  );
}

export default StatisticsItem;
