import { Link } from 'react-router-dom';

import './animatedList.styles.css';

function AnimatedList({ list }) {
  return (
    <ul className='animated-list'>
      {list.map((l) => (
        <li className='animated-list__item' key={l.id}>
          <Link to={`${l.url}`}>{l.label}</Link>
        </li>
      ))}
    </ul>
  );
}

export default AnimatedList;
