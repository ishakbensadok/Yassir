import { useTransition, animated } from 'react-spring';

const baseStyle = {
  position: 'absolute',
  left: '0',
  width: '100%',
  zIndex: 100,
};

const createTransitionConfig = (direction, end) => {
  const isUp = direction === 'up';
  const translateYStart = isUp ? '20%' : '-20%';
  const translateYEnd = isUp ? `${end}%` : '-2%';

  return {
    from: {
      ...baseStyle,
      transform: `translateY(${translateYStart})`,
      opacity: 0,
      ...(isUp ? { top: '100%' } : { bottom: '100%' }),
    },
    enter: {
      ...baseStyle,
      transform: `translateY(${translateYEnd})`,
      opacity: 1,
      ...(isUp ? { top: '100%' } : { bottom: '100%' }),
    },
    leave: {
      ...baseStyle,
      transform: `translateY(${translateYStart})`,
      opacity: 0,
      ...(isUp ? { top: '100%' } : { bottom: '100%' }),
    },
    config: { tension: 170, friction: 20 },
  };
};

function Animation({ state, slide = 'up', end = 2, children }) {
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
