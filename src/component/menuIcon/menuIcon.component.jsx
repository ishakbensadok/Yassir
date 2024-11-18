import { ReactComponent as MenuSvg } from '../../assets/menuIcon.svg';
import './menuIcon.styles.css';
function MenuIcon({ onClick }) {
  return <MenuSvg className='menu-icon' onClick={onClick} />;
}

export default MenuIcon;
