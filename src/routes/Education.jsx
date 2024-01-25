import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Certificado from '../components/Certificado';
import certificadoFiap from '../assets/certificado/certificado-fiap.svg';
import certificadoFiapWeb from '../assets/certificado/certificado-fiap-web.svg';
import certificadoSwagger from '../assets/certificado/CursoSwagger.png';
// import './Education.css'; // Assuming you have a separate CSS file for styling

export default function Education() {
  const certificados = [
    {
      url: 'https://www2.fiap.com.br/updown/DocumentosAssinados/1274d8d9-5a9c-4a00-823e-78508e06f763.pdf',
      alt: 'Certificado de Qualificação Profissional em Análise de Sistemas e Prototipação Web',
      src: certificadoFiap,
    },
    {
      url: 'https://www2.fiap.com.br/updown/DocumentosAssinados/350b0cab-a2be-4c19-964b-87d3c8f18461.pdf',
      alt: 'Certificado de Qualificação Profissional em Desenvolvimento e Designer Web 2.0',
      src: certificadoFiapWeb,
    },
    {
      url: 'https://cursos.alura.com.br/user/jaci9306/course/swagger-documentando-apis/certificate',
      alt: 'Curso Swagger - Documentando suas APIs - Alura',
      src: certificadoSwagger,
    },
    {
      url: 'https://cursos.alura.com.br/user/jaci9306/course/swagger-documentando-apis/certificate',
      alt: 'Curso Swagger - Documentando suas APIs - Alura',
      src: certificadoSwagger,
    },
  ];

  return (
    <section id="education">
      <div className="card">
        <div className='texto'>
          <span>Algumas das minhas conquistas ...</span>
          <h2>Minhas Certificações</h2>
        </div>
        <div className='images'>
          <Certificado certificados={certificados} />
        </div>
      </div>
    </section>
  );
}
