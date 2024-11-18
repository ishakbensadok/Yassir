import { ReactComponent as FacebookSvg } from '../../assets/facebookIcon.svg';
import { ReactComponent as LinkedinSvg } from '../../assets/linkedinIcon.svg';
import { ReactComponent as InstagramSvg } from '../../assets/instagramIcon.svg';

import Logo from '../logo/logo.component';
import NavLinks from '../navLinks/navLinks.component';

import Section from '../section/section.compnent';
import { COLLABSIBLE_FOOTER_LINKS_ARRAY } from '../../utils/footerLinks.utils';
import LanguageRegionMenu from '../languageRegionMenu/languageRegionMenu.component';

import './footer.styles.css';

const link =
  'https://play.google.com/store/apps/details?id=com.yatechnologies.yassir_rider';

function Footer() {
  return (
    <footer className='footer-section'>
      <Section>
        <div className='footer__wrapper'>
          <div className='footer__left'>
            <Logo type='white' />

            <div className='footer__get-app-links'>
              <a target='_blank' href={link} rel='noopener noreferrer'>
                <img src='googleplay-dark.webp' alt='' />
              </a>
              <a target='_blank' href={link} rel='noopener noreferrer'>
                <img src='appstore-dark.webp' alt='' />
              </a>
            </div>
          </div>

          <NavLinks collabsibleLinks={COLLABSIBLE_FOOTER_LINKS_ARRAY} />
        </div>

        <div className='footer__footer'>
          <LanguageRegionMenu slide='down' />

          <div className='footer__policies'>
            <a target='_blank' href={link} rel='noopener noreferrer'>
              Privacy Policy
            </a>
            <a target='_blank' href={link} rel='noopener noreferrer'>
              Terms of Use
            </a>
            <a target='_blank' href={link} rel='noopener noreferrer'>
              Cookie Policy
            </a>
          </div>

          <div className='svgs'>
            <a
              target='_blank'
              href='https://www.facebook.com/Yassir.Algerie/'
              rel='noopener noreferrer'
            >
              <FacebookSvg />
            </a>
            <a
              target='_blank'
              href='https://www.linkedin.com/company/yassir/'
              rel='noopener noreferrer'
            >
              <LinkedinSvg />
            </a>
            <a
              target='_blank'
              href='https://www.instagram.com/yassir.algerie/'
              rel='noopener noreferrer'
            >
              <InstagramSvg />
            </a>
          </div>
        </div>
      </Section>
    </footer>
  );
}

export default Footer;
