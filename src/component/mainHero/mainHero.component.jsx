import { useMediaQuery } from 'react-responsive';
import MainHeroDesktop from '../mainHeroDesktop/mainHeroDesktop.component';
import MainHeroMobile from '../mainHeroMobile/mainHeroMobile.component';

function MainHero() {
  const isDesktop = useMediaQuery({ query: '(min-width: 640px)' });

  return isDesktop ? <MainHeroDesktop /> : <MainHeroMobile />;
}

export default MainHero;
