import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

import '../styles/BackToTopButton.scss'

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [deslocamentoRodape, setDeslocamentoRodape] = useState(false);

  const handleScroll = () => {
    const scrolled = document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    setIsVisible(scrolled > 300);

    if (scrolled + windowHeight >= documentHeight) {
      setDeslocamentoRodape(true);
    } else {
      setDeslocamentoRodape(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`back-to-top-button ${isVisible ? 'visible' : ''} ${deslocamentoRodape ? 'deslocamentoRodape' : ''}`} onClick={scrollToTop}>
      <FaArrowUp />
    </div>
  );
}

