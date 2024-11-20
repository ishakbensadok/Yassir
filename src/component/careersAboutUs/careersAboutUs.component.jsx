import { ReactComponent as CheckSvg } from '../../assets/checkIcon.svg';

import Section from '../section/section.compnent';

import './careersAboutUs.styles.css';

function CareersAboutUs() {
  return (
    <Section className='careers-about-us-section'>
      <div className='careers-about-us'>
        <h2 className='careers-about-us__title'>About Us</h2>

        <div className='core-principles'>
          <div className='core-principle core-principle-1'>
            <div className='tag'>Mission</div>
            <div className='principles'>
              <div className='principle hidden'>
                <div className='img-container'>
                  <img src='career-about-us-1.webp' alt='' />
                </div>
              </div>
              <div className='principle principle--highlighted'>
                <h3 className='principle__title'>Why Yassir exists</h3>
                <p className='principle__text'>
                  To serve Africans in the continent and its diaspora while
                  creating economic opportunities for service providers and
                  infusing social values.
                </p>
              </div>
              <div className='principle hidden'>
                <div className='img-container'>
                  <img src='career-about-us-2.webp' alt='' />
                </div>
              </div>
            </div>
          </div>
          {/* ♦////* */}
          <div className='core-principle core-principle-2'>
            <div className='tag'>Vision</div>
            <div className='principles'>
              <div className='principle hidden'>
                <div className='img-container'>
                  <img src='career-about-us-3.webp' alt='' />
                </div>
              </div>
              <div className='principle hidden'>
                <div className='img-container'>
                  <img src='career-about-us-4.webp' alt='' />
                </div>
              </div>
              <div className='principle principle--highlighted'>
                <h3 className='principle__title'>We aspire towards</h3>
                <p className='principle__text'>
                  Providing our users with the most essential services to their
                  door by leveraging technology and a large ecosystem of
                  partners.
                </p>
              </div>
            </div>
          </div>
          {/* ♦////* */}
          <div className='core-principle core-principle-3'>
            <div className='tag'>Values</div>
            <div className='principles'>
              <div className='principle hidden'>
                <div className='img-container'>
                  <img src='career-about-us-5.webp' alt='' />
                </div>
              </div>
              <div className='principle principle--highlighted'>
                <h3 className='principle__title'>What Yassir stands for</h3>
                <div className='core-values'>
                  <div className='core-value'>
                    <div className='check-svg-container'>
                      <CheckSvg />
                    </div>
                    <p>Ambition</p>
                  </div>
                  <div className='core-value'>
                    <div className='check-svg-container'>
                      <CheckSvg />
                    </div>
                    <p>Transparency & Trust</p>
                  </div>
                  <div className='core-value'>
                    <div className='check-svg-container'>
                      <CheckSvg />
                    </div>
                    <p>Quality</p>
                  </div>
                  <div className='core-value'>
                    <div className='check-svg-container'>
                      <CheckSvg />
                    </div>
                    <p>Performance</p>
                  </div>
                </div>
              </div>
              <div className='principle hidden'>
                <div className='img-container'>
                  <img src='career-about-us-6.webp' alt='' />
                </div>
              </div>
            </div>
          </div>
          {/* ♦////* */}
          <div className='core-principle core-principle-4'>
            <div className='tag'>Benefits</div>
            <div className='principles'>
              <div className='principle hidden'>
                <div className='img-container'>
                  <img src='career-about-us-7.webp' alt='' />
                </div>
              </div>
              <div className='principle hidden'>
                <div className='img-container'>
                  <img src='career-about-us-8.webp' alt='' />
                </div>
              </div>
              <div className='principle principle--highlighted'>
                <h3 className='principle__title'>Why choose Yassir</h3>
                <p className='principle__text'>
                  Be part of one of the fastest-growing tech companies in
                  Africa.
                </p>
                <div className='core-values'>
                  <div className='core-value'>
                    <div className='check-svg-container'>
                      <CheckSvg />
                    </div>
                    <p>
                      Competitive compensation, exceptional benefits, and a
                      flexible work environment.
                    </p>
                  </div>
                  <div className='core-value'>
                    <div className='check-svg-container'>
                      <CheckSvg />
                    </div>
                    <p>
                      Highly collaborative workplace with colleagues from all
                      around the world
                    </p>
                  </div>
                  <div className='core-value'>
                    <div className='check-svg-container'>
                      <CheckSvg />
                    </div>
                    <p>
                      Make a real impact on the world by helping us bring
                      affordable financial and on-demand services to millions of
                      Africans.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default CareersAboutUs;
