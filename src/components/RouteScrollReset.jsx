import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router';

export default function RouteScrollReset() {
  const { hash, pathname } = useLocation();

  useLayoutEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));

      if (target) {
        target.scrollIntoView({ block: 'start', behavior: 'instant' });
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [hash, pathname]);

  return null;
}
