import { useEffect, useState } from 'react';
import { SCREEN_MOBILE, SCREEN_TABLET } from '../constants/constants';

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (e) => {
      setWidth(e.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    isScreenSm: width >= SCREEN_MOBILE,
    isScreenMd: width >= SCREEN_TABLET,
  };
};
