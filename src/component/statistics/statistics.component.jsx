import Section from '../section/section.compnent';

import LazyLoading from '../lazyLoading/lazyLoading.component';

import { ReactComponent as LogoSvg } from '../../assets/logoPurpleIcon.svg';

import { STATISTICS_ITEMS } from '../../utils/statictics.utils';

import StatisticsItem from '../statisticsItem/statisticsItem.component';

import './statistics.styles.css';

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
