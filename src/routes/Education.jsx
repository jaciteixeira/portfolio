import React from 'react';
import Footer from '../components/Footer';
import certificadoFiap from '../assets/certificado/certificado-fiap.svg'
import certificadoFiapWeb from '../assets/certificado/certificado-fiap-web.svg';
import certificadoSwagger from '../assets/certificado/CursoSwagger.png';

export default function Education() {
  const certificados = [
    {
        url: 'https://www2.fiap.com.br/updown/DocumentosAssinados/1274d8d9-5a9c-4a00-823e-78508e06f763.pdf', 
        alt: 'Certificado de Qualificação Profissional em Análise de Sistemas e Prototipação Web', 
        imgSrc: certificadoFiap 
    },
    { 
        url: 'https://www2.fiap.com.br/updown/DocumentosAssinados/350b0cab-a2be-4c19-964b-87d3c8f18461.pdf', 
        alt: 'Certificado de Qualificação Profissional em Desenvolvimento e Designer Web 2.0', 
        imgSrc: certificadoFiapWeb 
    },
    {
        url: 'https://cursos.alura.com.br/user/jaci9306/course/swagger-documentando-apis/certificate',
        alt: 'Curso Swagger - Documentando suas APIs - Alura',
        imgSrc: certificadoSwagger
    },
    {
        url: 'https://cursos.alura.com.br/user/jaci9306/course/swagger-documentando-apis/certificate',
        alt: 'Curso Swagger - Documentando suas APIs - Alura',
        imgSrc: certificadoSwagger
    },
  ];

  return (
    <>
      <section id="education">
        <div className="card">
          <div className='texto'>
            <span>Algumas das minhas conquistas ...</span>
            <h2>Minhas Certificações</h2>
          </div>
          <div className="certificados">
            {certificados.map((certificado, index) => (
              <div className="certificado" >
                <a key={index} href={certificado.url} target="_blank" >
                  <img src={certificado.imgSrc} alt={certificado.alt} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
