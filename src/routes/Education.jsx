import React from 'react';
import Certificado from '../components/Certificado';
import certificadoFiap from '../assets/certificado/certificado-fiap.svg';
import certificadoFiapWeb from '../assets/certificado/certificado-fiap-web.svg';
import certificadoSwagger from '../assets/certificado/certificado-swagger.png';
import certificadoReact from '../assets/certificado/certificado-react.png';
import certificadoReactComponents from '../assets/certificado/certificado-react-components.png';
import certificadoLibras from '../assets/certificado/certificado-libras.png';
import certificadoSustentabilidade from '../assets/certificado/certificado-sustentabilidade.png';

export default function Education() {
  const certificadosFiap = [
    {
      url: 'https://www2.fiap.com.br/updown/DocumentosAssinados/1274d8d9-5a9c-4a00-823e-78508e06f763.pdf',
      alt: 'Certificado de Qualificação Profissional em Análise de Sistemas e Prototipação Web',
      src: certificadoFiap,
      descricao: 'Profissional em Análise de Sistemas e Prototipação Web',
    },
    {
      url: 'https://www2.fiap.com.br/updown/DocumentosAssinados/350b0cab-a2be-4c19-964b-87d3c8f18461.pdf',
      alt: 'Certificado de Qualificação Profissional em Desenvolvimento e Designer Web 2.0',
      src: certificadoFiapWeb,
      descricao: 'Profissional em Desenvolvimento e Designer Web 2.0',
    },
    {
      url: 'https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/101379/2d7f63d2ec89eab1151e6ae95cdf975d/certificado.png',
      alt: 'Certificado Formação Social e Sustentabilidade',
      src: certificadoSustentabilidade,
      descricao: 'Certificado Formação Social e Sustentabilidade',
    },
    {
      url: 'https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/94600/aeff74b19b7e5b18635b0e830f89477c/certificado.png',
      alt: 'Certificado Libras',
      src: certificadoLibras,
      descricao: 'Certificado Libras',
    },
  ];

  const certificadosAlura = [
    {
      url: 'https://cursos.alura.com.br/user/jaci9306/course/swagger-documentando-apis/certificate',
      alt: 'Certificado Curso Swagger - Documentando suas APIs - Alura',
      src: certificadoSwagger,
      descricao: 'Swagger - Documentando suas APIs',
    },
    {
      url: 'https://cursos.alura.com.br/user/jaci9306/course/react-desenvolvendo-javascript/certificate',
      alt: 'Certificado Curso REACT: DESENVOLVENDO COM JAVASCRIPT',
      src: certificadoReact,
      descricao: 'React: Desenvolvendo com JavaScript',
    },
    {
      url: 'https://cursos.alura.com.br/user/jaci9306/course/react-componentes-funcionam/certificate',
      alt: 'Certificado Curso REACT: COMO OS COMPONENTES FUNCIONAM',
      src: certificadoReactComponents,
      descricao: 'React: Como os componentes funcionam',
    },

  ]

  return (
    <section id="education">
      <div className="card">
        <div className='texto'>
          <span>Algumas das minhas conquistas ...</span>
          <h2>Minhas Certificações</h2>
        </div>
        <div className='images'>
          <Certificado titulo={"Certificados Acadêmico"} certificados={certificadosFiap} />
          <Certificado titulo={"Certificados Alura"} certificados = { certificadosAlura} />
        </div>
      </div>
    </section>
  );
}
