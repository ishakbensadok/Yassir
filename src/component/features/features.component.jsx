import Section from '../section/section.compnent';
import { useMediaQuery } from 'react-responsive';

import { FEATURES_ARRAY } from '../../utils/features.utils';
import LazyLoading from '../lazyLoading/lazyLoading.component';

import './features.styles.css';
function Features() {
  const isDesktop = useMediaQuery({ query: '(min-width: 640px)' });

  return (
    <Section className='features-section'>
      <div className='features'>
        {FEATURES_ARRAY.map((f) => (
          <article className='feature' key={f.id}>
            <div className='feature__content'>
              <div className='svg-container'>{f.svg}</div>
              <h2 className='feature__content__heading'> {f.title} </h2>
              <p className='feature__content__description'> {f.description} </p>
            </div>
            <picture className='feature__image'>
              <LazyLoading src={isDesktop ? f.imageDes : f.imageMop} />
            </picture>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default Features;
