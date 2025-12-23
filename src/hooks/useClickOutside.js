import { useEffect, useRef, useCallback } from 'react';

export const useClickOutside = (handler) => {
  const ref = useRef(null);

  const memoizedHandler = useCallback((event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      handler();
    }
  }, [handler]);

  useEffect(() => {
    document.addEventListener('mousedown', memoizedHandler);
    document.addEventListener('touchstart', memoizedHandler); // Mobile support
    
    return () => {
      document.removeEventListener('mousedown', memoizedHandler);
      document.removeEventListener('touchstart', memoizedHandler);
    };
  }, [memoizedHandler]);

  return ref;
};
