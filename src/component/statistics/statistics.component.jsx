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

  const { ref } = useIntersectionObserver(callback);

  return (
    <div className='statistics__item' ref={ref}>
      <h3>{fullTitle}</h3>
      <p>{description}</p>
    </div>
  );
}

function Statistics() {
  return (
    <Section className='statistics-section'>
      <div className='statistics'>
        <picture className='statistics__image'>
          <LazyLoading src='numbers-image.webp' />
        </picture>
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