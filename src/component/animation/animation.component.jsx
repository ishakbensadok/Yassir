import { useTransition, animated } from 'react-spring';

const baseStyle = {
  position: 'absolute',
  left: '0',
  width: '100%',
  zIndex: 100,
};

const createTransitionConfig = (direction, end) => {
  const isUp = direction === 'up';
  const translateYStart = isUp ? '120%' : '-120%';
  const translateYEnd = isUp ? `${end}%` : '-102%';

  return {
    from: {
      ...baseStyle,
      transform: `translateY(${translateYStart})`,
      opacity: 0,
      ...(isUp ? { bottom: '0' } : { top: '0' }),
    },
    enter: {
      ...baseStyle,
      transform: `translateY(${translateYEnd})`,
      opacity: 1,
      ...(isUp ? { bottom: '0' } : { top: '0' }),
    },
    leave: {
      ...baseStyle,
      transform: `translateY(${translateYStart})`,
      opacity: 0,
      ...(isUp ? { bottom: '0' } : { top: '0' }),
    },
    config: { tension: 170, friction: 20 },
  };
};

function Animation({ state, slide = 'up', end = 102, children }) {
  const transitions = useTransition(state, createTransitionConfig(slide, end));

  return transitions(
    (style, item) =>
      item && (
        <animated.div className='animated' style={style}>
          {children}
        </animated.div>
      )
  );
}

export default Animation;
