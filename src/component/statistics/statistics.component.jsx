import { useState } from 'react';

import Section from '../section/section.compnent';

import LazyLoading from '../lazyLoading/lazyLoading.component';

import { ReactComponent as LogoSvg } from '../../assets/logoPurpleIcon.svg';

import { STATISTICS_ITEMS } from '../../utils/statictics.utils';

import { useIntersectionObserver } from '../../hooks/useIntersectionObserver.hook';

import './statistics.styles.css';

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

function Statistics({ imageSrc = null, className = '' }) {
  return (
    <Section className={`statistics-section ${className}`}>
      <div className='statistics'>
        {imageSrc ? (
          <picture className='statistics__image'>
            <LazyLoading src={imageSrc} />
          </picture>
        ) : (
          <header className='statistics__header'>
            <h2 className='statistics__heading'>
              Yassir is growing fast. <span>Super fast.</span>
            </h2>
            <img src='metrics.webp' alt='' />
          </header>
        )}
        <div className='statistics__items'>
          {STATISTICS_ITEMS.map((s) => (
            <StatisticsItem statistic={s} key={s.id} />
          ))}
          <div className='logo-container'>
            <LogoSvg />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Statistics;
