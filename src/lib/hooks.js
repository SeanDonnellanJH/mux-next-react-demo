import { useEffect, useState } from 'react';

/**
 * Returns whether a component has mounted client-side or not
 * Useful for rendering content only on client-side, to avoid NextJS hydration mistmatch errors
 * Credit: Josh W. Comeau
 * Source: https://www.joshwcomeau.com/react/the-perils-of-rehydration/
 * @param {function} callback - Callback function to invoke on mount (optional)
 * @return {bool}
 */
export function useHasMounted(callback) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    if (callback && typeof callback === 'function') {
      callback();
    }
    setHasMounted(true);
  }, [callback]);

  return hasMounted;
}
