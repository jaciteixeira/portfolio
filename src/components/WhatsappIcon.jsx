import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

import '../styles/WhatsappIcon.scss';

export default function WhatsappIcon(){

  const [deslocamento, setDeslocamento] = useState(false);
  const [deslocamentoRodape, setDeslocamentoRodape] = useState(false);

  const handleDeslocamento = () => {
    const scrolled = document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    setDeslocamento(scrolled > 300);

    if (scrolled + windowHeight >= documentHeight) {
      setDeslocamentoRodape(true);
    } else {
      setDeslocamentoRodape(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleDeslocamento);
    return () => {
      window.removeEventListener('scroll', handleDeslocamento);
    };
  }, []);

  return (
    <div className={`whatsapp-icon ${deslocamento ? 'deslocado' : ''} ${deslocamentoRodape ? 'deslocamentoRodape' : ''}`}>
      <a href="https://api.whatsapp.com/send?phone=5511967208527" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </a>
    </div>
  );
}
