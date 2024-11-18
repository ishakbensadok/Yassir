import { ReactComponent as CollapseIcon } from '../../assets/collapseIcon.svg';

import './collapsibleContainer.styles.css';

function CollapsibleContainer({ children, onClick, className = '' }) {
  return (
    <div className={`collapsible-container ${className}`} onClick={onClick}>
      <CollapseIcon />
      <span>{children}</span>
    </div>
  );
}

export default CollapsibleContainer;
