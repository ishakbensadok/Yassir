import './ourCoreValuesSection.styles.css';
import Section from '../section/section.compnent';
import { CORE_VALUES_ARRAY } from '../../utils/coreValues.utils';

import LazyLoading from '../lazyLoading/lazyLoading.component';

const GALLARY = [
  'image-2-0.webp',
  'image-2-1.webp',
  'image-2-2.webp',
  'image-2-3.webp',
  'image-2-4.webp',
];
function OurCoreValuesSection() {
  return (
    <Section className='our-core-values-section'>
      <div className='our-core-values'>
        <div className='values'>
          <h2 className='values__heading'>Our core values</h2>
          {CORE_VALUES_ARRAY.map((v) => (
            <div className='value' key={v.id}>
              <h3 className='value__title'> {v.title} </h3>
              <p className='value__description'>{v.description} </p>
            </div>
          ))}
        </div>
        <div className='gallery'>
          {GALLARY.map((img) => (
            <div className='gallery__item' key={img}>
              <LazyLoading src={img} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default OurCoreValuesSection;
