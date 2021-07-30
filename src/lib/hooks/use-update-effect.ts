import { useEffect, useRef } from 'react';

export function useUpdateEffect(fn: () => void, deps: unknown[]) {
  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      fn();
    }
  }, deps);
}
