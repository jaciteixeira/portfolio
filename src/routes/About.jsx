import foto from "../assets/foto.svg";
import React from 'react'

function About(){
  return (
    <section id="about">
          <div className="card">
            <div className="foto-about">
              <img src={foto} alt="Foto Jaci Teixeira" />
            </div>

            <div className="texto-about">
              <span>Como cheguei até aqui...</span>
              <h1>Um pouco sobre mim.</h1>
              <p>
                🏁 Minha jornada na programação começou lá em 2018, quando saí do
                ensino médio e entrei na faculdade para estudar Ciência da
                Computação. Nessa época, dei de cara com linguagens como C++,
                JavaScript, HTML e CSS. Em 2020, precisei dar uma pausa no curso,
                mas isso não me impediu de continuar aprendendo por conta própria,
                principalmente na área de front-end.
              </p>
              <p>
                ✨ Em 2022, apareceu a chance de participar do Instituto Maria Mercês
                e concorrer a uma bolsa no Programa Ativa da Saint Gobain. Com
                essa bolsa, entrei no curso de Análise e Desenvolvimento de
                Sistemas na FIAP, onde tenho aprimorado meus conhecimentos. Lá,
                conheci de perto SQL, Python, Java (que é minha favorita), Node,
                Next.js, Tailwind, React.js (a mesma que usei para fazer este
                portfólio) e até Machine Learning.
              </p>
              <p>
                📔 Ao longo do caminho, trabalhei junto com meus colegas em desafios
                propostos pela faculdade. Seis meses após começar na faculdade,
                consegui uma vaga de estágio na Vivo - Telefônica Brasil, onde
                tenho aprofundado meus conhecimentos em back-end, que é o caminho
                que pretendo seguir na carreira. Sou supercuriosa, sempre buscando
                mais conhecimento e especializações, e assim sigo trilhando minha
                jornada profissional.
              </p>
            </div>
          </div>
        </section>
  )
}

export default About;