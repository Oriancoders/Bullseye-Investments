// src/components/AOSInitializer.jsx
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSInitializer = ({ duration = 1000 , offset = 20, once =true , easing = 'ease-in-out' }) => {
  useEffect(() => {
    AOS.init({
      duration ,
      offset,
      once,
      easing,
    });
  }, [duration , offset, once  , easing  ]);

  return null;
};

export default AOSInitializer;
