import { ReactComponent as LogoPurpleSvg } from '../../assets/logoPurpleIcon.svg';
import { ReactComponent as LogoWhiteSvg } from '../../assets/logoWhiteIcon.svg';
import { Link } from 'react-router-dom';
import './logo.styles.css';

function Logo({ type = '' }) {
  const logo =
    type === 'white' ? (
      <LogoWhiteSvg className='logo' />
    ) : (
      <LogoPurpleSvg className='logo' />
    );

  return (
    <Link to='/' className='logo'>
      {logo}
    </Link>
  );
}

export default Logo;
