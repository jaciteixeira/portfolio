import { useState } from "react";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import WhatsappIcon from "./components/WhatsappIcon";
import BackToTopButton from "./components/BackToTopButton";
import foto from './assets/foto.svg'
import "./App.scss";

export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <Cabecalho />
        <section id="intro" className="intro">
          <div className="card">
            <div className="conteudo">
              <h2>Desenvolvedora Front-End & Back-End </h2>
              <p>
                Sou uma entusiasta do mundo tecnológico, animada e comprometida
                com minha jornada como estagiária de desenvolvimento de software
                na Vivo - Telefônica Brasil. Busco constantemente ampliar meu
                conhecimento. Além disso, faço parte do programa Atados na Saint
                Gobain, sendo bolsista pelo Instituto Maria Mercês. Estou
                empenhada em absorver aprendizados tanto nesta experiência
                quanto na minha dedicação às tecnologias como <strong>API REST, Spring,
                SQL, React.js, Node.js.</strong>
              </p>
            </div>
            <div className="image">
            <img className="foto" src={foto} alt=''/>
            </div>
          </div>
        </section>
        <section>
          <div id="about"></div>
        </section>
        <section id="icons-rodape">
          <WhatsappIcon />
          <BackToTopButton />
        </section>
        <Rodape />
      </div>
    </>
  );
}
