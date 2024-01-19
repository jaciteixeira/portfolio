import { useState } from "react";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import WhatsappIcon from "./components/WhatsappIcon";
import BackToTopButton from "./components/BackToTopButton";
import image from "./assets/image-mulher-sentada.svg";
import foto from "./assets/foto.svg";
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
              <h2>Desenvolvedora Back-End & Front-End </h2>
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
        <section id="about">
          <div className="about-image">
            <img src={foto} alt="Foto Jaci Teixeira" />
          </div>
          <div className="conteudo-about">
            <h1>About Me</h1>
            <p>
              Minha jornada na programação começou lá em 2018, quando saí do
              ensino médio e entrei na faculdade para estudar Ciência da
              Computação. Nessa época, dei de cara com linguagens como C++,
              JavaScript, HTML e CSS. Em 2020, precisei dar uma pausa no curso,
              mas isso não me impediu de continuar aprendendo por conta própria,
              principalmente na área de front-end.
            </p>
            <p>
              Em 2022, apareceu a chance de participar do Instituto Maria Mercês
              e concorrer a uma bolsa no Programa Ativa da Saint Gobain. Com
              essa bolsa, entrei no curso de Análise e Desenvolvimento de
              Sistemas na FIAP, onde tenho aprimorado meus conhecimentos. Lá,
              conheci de perto SQL, Python, Java (que é minha favorita), Node,
              Next.js, Tailwind, React.js (a mesma que usei para fazer este
              portfólio) e até Machine Learning.
            </p>
            <p>
              Ao longo do caminho, trabalhei junto com meus colegas em desafios
              propostos pela faculdade. Seis meses após começar na faculdade,
              consegui uma vaga de estágio na Vivo - Telefônica Brasil, onde
              tenho aprofundado meus conhecimentos em back-end, que é o caminho
              que pretendo seguir na carreira. Sou supercuriosa, sempre buscando
              mais conhecimento e especializações, e assim sigo trilhando minha
              jornada profissional.
            </p>
          </div>
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
