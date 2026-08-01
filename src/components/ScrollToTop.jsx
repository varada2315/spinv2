import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isInitialMount = useRef(true);

  // Disable browser scroll restoration globally across all devices & browsers
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Handle page refresh (F5, Ctrl+R, browser reload button):
  // Automatically redirect any sub-page refresh to the Home page (/) at the very top.
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      
      // Force initial scroll to top
      window.scrollTo(0, 0);

      // If user refreshed on a sub-page (e.g. /about, /international, /visas, etc.), redirect to home (/)
      if (window.location.pathname !== '/') {
        navigate('/', { replace: true });
        window.scrollTo(0, 0);
      }
    }
  }, [navigate]);

  // On every client-side route change, reset scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
