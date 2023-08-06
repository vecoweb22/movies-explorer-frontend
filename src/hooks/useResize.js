import { useEffect, useState } from 'react';
import {
  SCREEN_LAPTOP,
  SCREEN_TABLET,
} from '../constants/constants';

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
    isScreenMd: width > SCREEN_TABLET && width <= SCREEN_LAPTOP, // поправил параметры
    isScreenSm: width <= SCREEN_TABLET,
  };
};


