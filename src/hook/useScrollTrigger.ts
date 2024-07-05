// utils/useScrollTrigger.js
import { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useScrollTrigger = () => {
  useEffect(() => {
    // Cible les sections ou conteneurs individuels
    const sections = document.querySelectorAll('.fade-in');

    sections.forEach(section => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom top',
          scrub: 1,
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, []);
};

export default useScrollTrigger;
