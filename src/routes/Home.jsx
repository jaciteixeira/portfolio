import React from 'react';
import SoftSkill from "../components/SoftSkill";
import Projeto from '../components/Projeto';

import imageIntro from "../assets/image-mulher-sentada.svg";
import cplus from '../assets/skills/logo-c++.svg';
import css from '../assets/skills/logo-css.svg';
import git from '../assets/skills/logo-git.svg';
import html from '../assets/skills/logo-html.svg';
import java from '../assets/skills/logo-java.svg';
import javascript from '../assets/skills/logo-javascript.svg';
import node from '../assets/skills/logo-node-js.svg';
import oracle from '../assets/skills/logo-oracle.svg';
import react from '../assets/skills/logo-react.svg';
import sass from '../assets/skills/logo-sass.svg';
import spring from '../assets/skills/logo-spring.svg';

import caderno from '../assets/skills/caderno.svg';
import colaboracao from '../assets/skills/colaboracao.svg';
import problema from '../assets/skills/problema.svg';
import setas from '../assets/skills/setas-circulares.svg';
import vigiasaude from '../assets/images/vigiasaude-home.png'

const Home = () => {
  
  return (
    <>
      <section id="intro" className="intro">
        <div className="card">
          <div className="card-texto">
            <h2>Desenvolvedora de Software </h2>
            <p>
              Meu nome é Jaci Teixeira, e sou uma desenvolvedora Full Stack
              com ênfase no back-end. Possuo experiência no desenvolvimento de
              aplicações com API REST, utilizando técnicas avançadas de
              codificação. Minhas habilidades incluem o domínio de ferramentas
              como
              <strong>
                {" "}
                Spring Boot, React.js, Node.js, SQL, Git/Github.
              </strong>
            </p>
          </div>
          <div className="card-image">
            <img className="image" src={imageIntro} alt="Ilustração " />
          </div>
        </div>
      </section>

      <section id="skill">
        <div className="card">
          <div className="conteudo">
            <div className="hard-skill">
              <div className="texto">
                <p>Ferramentas que tenho familiaridade</p>
                <h1>Skills</h1>
                <h2>Linguagens e Ferramentas</h2>
              </div>
              <div className="ferramentas">
                <div className='images'>
                  <img className='image' src={javascript} alt="Logo Javascript" />
                  <img className='image' src={html} alt="Logo HTML 5" />
                  <img className='image' src={css} alt="Logo CSS 3" />
                  <img className='image' src={sass} alt="Logo Sass" />
                  <img className='image' src={react} alt="Logo React.js" />
                  <img className='image' src={node} alt="Logo Node.js" />
                  <img className='image' src={cplus} alt="Logo C++" />
                  <img className='image' src={java} alt="Logo Java" />
                  <img className='image' src={spring} alt="Logo Spring" />
                  <img className='image' src={git} alt="Logo Git" />
                  <img className='image' src={oracle} alt="Logo Oracle" />
                </div>
              </div>
            </div>
            <div className="soft-skill">
              <h2>Interpessoais</h2>
              <div className="skill">
                <SoftSkill
                  src='/comunicacao.svg'
                  alt="Ilustração comunicação"
                  titulo="Comunicação"
                  texto="Possuo facilidade em expressar ideias de maneira clara e eficiente."
                />
              </div>
              <div className="skill">
                <SoftSkill
                  src={colaboracao}
                  alt="Ilustração colaboração"
                  titulo="Colaboração"
                  texto="Tenho experiência em colaborar efetivamente com outras equipes e desenvolvedores."
                />
              </div>
              <div className="skill">
                <SoftSkill
                  src={problema}
                  alt="Ilustração problema"
                  titulo="Resolução de Problemas e Pensamento Crítico"
                  texto="Sou habilidoso em avaliar informações criticamente e abordar problemas de maneira lógica."
                />
              </div>
              <div className="skill">
                <SoftSkill
                  src={setas}
                  alt="Ilustração Adaptabilidade"
                  titulo="Adaptabilidade"
                  texto="Demonstro flexibilidade e a capacidade de me ajustar a mudanças tecnológicas e requisitos."
                />
              </div>
              <div className="skill">
                <SoftSkill
                  src={caderno}
                  alt="Ilustração Aprendizado"
                  titulo="Aprendizado Contínuo"
                  texto="Estou sempre disposta a aprender de forma constante, buscando aprimorar minhas habilidades e conhecimentos."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="card">
          <div className='titulo'>
            <p>Destaques</p>
            <h1>Projetos</h1>
          </div>
          <div className='div-projeto'>
            <Projeto
              src={vigiasaude}
              alt="Descrição da imagem"
              link="#"
              titulo="Vigia Saude"
              descritivo="Projeto desenvolvido com proposito acadêmico. Esta aplicação foi dedicada ao monitoramento de casos de doenças
              tropicais muitas vezes negligenciadas no Brasil. Back-end desenvolvido com Java, front-end desenvolvido em next.js"
              repositorio='#'
              linguagens={[
                { src: react, alt: 'React' },
                { src: java, alt: 'Java' },
                { src: sass, alt: 'Sass' },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home