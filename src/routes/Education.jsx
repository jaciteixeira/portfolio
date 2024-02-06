import React from 'react';
import Certificado from '../components/Certificado';
// certificados fiap
import certificadoFiap from '../assets/certificado/certificado-fiap.png';
import certificadoFiapWeb from '../assets/certificado/certificado-fiap-web.png';
import certificadoLibras from '../assets/certificado/certificado-fiap-libras.png';
import certificadoSustentabilidade from '../assets/certificado/certificado-fiap-sustentabilidade.png';
//certificados alura
import certificadoSwagger from '../assets/certificado/certificado-alura-swagger.png';
import certificadoReact from '../assets/certificado/certificado-alura-react.png';
import certificadoReactRouter from '../assets/certificado/certificado-alura-react-router-dom.png';
import certificadoReactComponents from '../assets/certificado/certificado-alura-react-components.png';
import certificadoJavaServlet from '../assets/certificado/certificado-alura-java-servlet.png';
//certificado impacta
import certificadoFormacaoBackend from '../assets/certificado/certificado-impacta-formacao-backend-developer.png';
import certificadoAplicacao from '../assets/certificado/certificado-impacta-aplicacao-java.png';
import certificadoDesenvolvimento from '../assets/certificado/certificado-impacta-desenvolvimento-web-service.png';
import certificadoJira from '../assets/certificado/certificado-impacta-jira-software.png';
import certificadoLiderança from '../assets/certificado/certificado-impacta-lideranca-essencial-para-lider.png';
import certificadoScrum from '../assets/certificado/certificado-impacta-scrum-gestao-desenvolvimentoa-gil.png';
import certificadoProdutividade from '../assets/certificado/certificado-impacta-produtividade-gestao-tempo.png';
import certificadoPLSQL from '../assets/certificado/certificado-impacta-programando-com-mySQL.png';
import certificadoMySql from '../assets/certificado/certificado-impacta-mySQL-criando-manipulando.png';
import certificadoJavaWeb from '../assets/certificado/certificado-impacta-java-web.png';
import certificadoPOO from '../assets/certificado/certificado-impacta-introducao-POO.png';
import certificadoLogica from '../assets/certificado/certificado-impacta-logica-programacao-aplicada.png';

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
    {
      url: 'https://cursos.alura.com.br/user/jaci9306/course/React-desenvolvendo-react-router-javaScript/certificate',
      alt: 'Certificado Curso REACT: DESENVOLVENDO EM REACT ROUTER COM JAVASCRIPT',
      src: certificadoReactRouter,
      descricao: 'React: Como os componentes funcionam',
    },
    {
      url: 'https://cursos.alura.com.br/user/jaci9306/course/servlets-fundamentos-programacao-web-java/certificate',
      alt: 'Certificado Curso Java Servlet: Programação WEB JAVA',
      src: certificadoJavaServlet,
      descricao: 'Curso Java Servlet: Programação WEB JAVA',
    },

  ]

  const certificadosImpacta = [
    {
      url: 'https://edools-3-production.s3.amazonaws.com/org-6352/school-9201/certificates/enrollment-8873698/course-14854-0862e031-5724-41a2-aa21-263f573bc6bc.pdf',
      alt: 'Certificado Certificado Java - Desenvolvendo Web Services',
      src: certificadoDesenvolvimento,
      descricao: 'Java - Desenvolvendo Web Services',
    },
    {
      url: 'https://edools-3-production.s3.amazonaws.com/org-6352/school-9201/certificates/enrollment-8873698/course-14852-30d51589-8726-4cd3-9b00-1aca3307ecd3.pdf',
      alt: 'Certificado Java - Criando uma Aplicação Completa ',
      src: certificadoAplicacao,
      descricao: 'Java - Criando uma Aplicação Completa',
    },
    {
      url: 'https://edools-3-production.s3.amazonaws.com/org-6352/school-9201/certificates/enrollment-8873698-abb3c652-d9d9-4570-9b75-42d1652813ff.pdf',
      alt: 'Certificado Formação Back-End Developer',
      src: certificadoFormacaoBackend,
      descricao: 'Formação Back-End Developer',
    },
    {
      url: 'https://edools-3-production.s3.amazonaws.com/org-6352/school-9201/certificates/enrollment-8873698/course-14840-7704b436-f98e-4147-a4c9-dce831e5c720.pdf',
      alt: 'Certificado Java Web',
      src: certificadoJavaWeb,
      descricao: 'Java Web',
    },
    {
      url: 'https://edools-3-production.s3.amazonaws.com/org-6352/school-9201/certificates/enrollment-8873698/course-14819-2938b6da-8640-49b5-bdcc-364d67637575.pdf',
      alt: 'Certificado Introdução à Programação Orientada a Objeto',
      src: certificadoPOO,
      descricao: 'Introdução à Programação Orientada a Objeto',
    },
    {
      url: 'https://edools-3-production.s3.amazonaws.com/org-6352/school-9201/certificates/enrollment-8873698/course-25121-86891e1b-3a01-4252-9578-ce5e068d1ef6.pdf',
      alt: 'Certificado Lógica de Programação Aplicada à Linguagem ',
      src: certificadoLogica,
      descricao: 'Lógica de Programação Aplicada à Linguagem ',
    },
    {
      url: 'https://edools-3-production.s3.amazonaws.com/org-6352/school-9201/certificates/enrollment-8873698/course-44575-272b69cb-01be-455b-93e8-3f007004dae1.pdf',
      alt: 'Certificado Jira Software - Gestão Ágil de Projetos e Operações',
      src: certificadoJira,
      descricao: 'Jira Software - Gestão Ágil de Projetos e Operações',
    },
    {
      url: 'https://edools-3-production.s3.amazonaws.com/org-6352/school-9201/certificates/enrollment-8873698/course-14863-f34d1282-3d14-44cf-a1e9-e9a54be27708.pdf',
      alt: 'Certificado Scrum - Gestão e Desenvolvimento Ágil de Projetos',
      src: certificadoScrum,
      descricao: 'Scrum - Gestão e Desenvolvimento Ágil de Projetos',
    },
    {
      url: 'https://edools-3-production.s3.amazonaws.com/org-6352/school-9201/certificates/enrollment-8873698/course-19497-9fb9862d-18e4-45bd-b5ee-98051731f33a.pdf',
      alt: 'Certificado MySQL - Criando e Manipulando Banco de Dados',
      src: certificadoMySql,
      descricao: 'MySQL - Criando e Manipulando Banco de Dados',
    },
    {
      url: 'https://edools-3-production.s3.amazonaws.com/org-6352/school-9201/certificates/enrollment-8873698/course-32260-3936dc63-7e6c-4982-b67d-760890dcc5f8.pdf',
      alt: 'Certificado MySQL PL SQL - Programando com MySQL ',
      src: certificadoPLSQL,
      descricao: 'MySQL PL SQL - Programando com MySQL',
    },
    {
      url: 'https://edools-3-production.s3.amazonaws.com/org-6352/school-9201/certificates/enrollment-8873698/course-141858-a51fda7e-279c-4cf9-9c4e-7d9f93473fa2.pdf',
      alt: 'Certificado Liderança - O Essencial para o Líder',
      src: certificadoLiderança,
      descricao: 'Liderança - O Essencial para o Líder',
    },
    {
      url: 'https://edools-3-production.s3.amazonaws.com/org-6352/school-9201/certificates/enrollment-8873698/course-156551-2f4d28da-517f-423d-b7a3-c58c5071ce8c.pdf',
      alt: 'Certificado Produtividade e Gestão do Tempo ',
      src: certificadoProdutividade,
      descricao: 'Produtividade e Gestão do Tempo ',
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
          <Certificado titulo={"Certificados Impacta"} certificados = { certificadosImpacta} />
        </div>
      </div>
    </section>
  );
}
