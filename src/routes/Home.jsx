// import React from 'react'

import image from "../assets/image-mulher-sentada.svg";
import react from '../assets/logo-react.svg'
import cplus from '../assets/logo-c++.svg'
import git from '../assets/logo-git.svg'
import html from '../assets/logo-html.svg'
import java from '../assets/logo-java.svg'
import javascript from '../assets/logo-javascript.svg'
import node from '../assets/logo-node-js.svg'
import oracle from '../assets/logo-oracle.svg'
import sass from '../assets/logo-sass.svg'
import spring from '../assets/logo-spring.svg'
import css from '../assets/logo-css.svg'
import construcao from '../assets/construcao.svg'

import SoftSkill from "../components/SoftSkill";

const Home = () => {
  return (
    <>
      <section id="intro" className="intro">
        <div className="card">
          <div className="card-conteudo">
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
            <img className="image" src={image} alt="Ilustração " />
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
                  src="/comunicacao.svg"
                  alt="Ilustração comunicação"
                  titulo="Comunicação"
                  texto="Possuo facilidade em expressar ideias de maneira clara e eficiente."
                />
              </div>
              <div className="skill">
                <SoftSkill
                  src="/colaboracao.svg"
                  alt="Ilustração colaboração"
                  titulo="Colaboração"
                  texto="Tenho experiência em colaborar efetivamente com outras equipes e desenvolvedores."
                />
              </div>
              <div className="skill">
                <SoftSkill
                  src="/problema.svg"
                  alt="Ilustração problema"
                  titulo="Resolução de Problemas e Pensamento Crítico"
                  texto="Sou habilidoso em avaliar informações criticamente e abordar problemas de maneira lógica."
                />
              </div>
              <div className="skill">
                <SoftSkill
                  src="/setas-circulares.svg"
                  alt="Ilustração Adaptabilidade"
                  titulo="Adaptabilidade"
                  texto="Demonstro flexibilidade e a capacidade de me ajustar a mudanças tecnológicas e requisitos."
                />
              </div>
              <div className="skill">
                <SoftSkill
                  src="/caderno.svg"
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
        <h1>SECTION EM CONSTRUÇÃO</h1>
        <img src={construcao} alt="Em Construção" />

        </div>

      </section>
    </>
  )
}

export default Home