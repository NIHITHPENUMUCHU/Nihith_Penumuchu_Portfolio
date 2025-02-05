import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export function useScrollToSection() {
  const navigate = useNavigate();

  const scrollToSection = useCallback((sectionId: string) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }, [navigate]);

  return scrollToSection;
}