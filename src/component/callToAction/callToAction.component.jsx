import './callToAction.styles.css';

import { Link } from 'react-router-dom';
function CallToAction({
  children,
  link,
  type = {},
  className = '',
  target = '_blank',
}) {
  return (
    <Link
      target={target}
      to={link}
      className={`call-to-action ${type} ${className}`}
      rel='noopener noreferrer'
    >
      {children}
    </Link>
  );
}

export default CallToAction;
