import { useEffect, useCallback, useRef } from 'react';

export function useIntersectionObserver(
  callback,
  options = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  }
) {
  const ref = useRef(null);

  const handleIntersection = useCallback(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          /// action
          callback();
          ////////////////

          // unobserve after intersected
          observer.unobserve(entry.target);
        }
      });
    },
    [callback]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [handleIntersection, options]);

  return { ref };
}
