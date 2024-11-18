import { useTransition, animated } from 'react-spring';
import './animatedList.styles.css';
import { Link } from 'react-router-dom';
const transitionConfigSlidUp = {
  from: { transform: 'translateY(120%)', opacity: 0, bottom: '0' },
  enter: { transform: 'translateY(102%)', opacity: 1, bottom: '0' },
  leave: { transform: 'translateY(120%)', opacity: 0, bottom: '0' },
  config: { tension: 170, friction: 20 },
};

const transitionConfigSlidDown = {
  from: { transform: 'translateY(-120%)', opacity: 0, top: '0' },
  enter: { transform: 'translateY(-102%)', opacity: 1, top: '0' },
  leave: { transform: 'translateY(-120%)', opacity: 0, top: '0' },
  config: { tension: 170, friction: 20 },
};

function AnimatedList({ state, list, slide = 'up' }) {
  const transitions = useTransition(
    state,
    slide === 'up' ? transitionConfigSlidUp : transitionConfigSlidDown
  );

  if (!list || list.length === 0) return null;

  return transitions(
    (style, item) =>
      item && (
        <animated.ul className='animated-list' style={style}>
          {list.map((l) => (
            <li className='animated-list__item' key={l.id}>
              <Link to={`${l.url}`}>{l.label}</Link>
            </li>
          ))}
        </animated.ul>
      )
  );
}

export default AnimatedList;
