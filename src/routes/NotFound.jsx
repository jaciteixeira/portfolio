import "../styles/NotFound.scss";

import icone from "../assets/robo.png";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navegar = useNavigate();

  return (
    <div className="container notfound">
      <div className="conteudo ">
        <span className="texto404">404</span>
        <img src={icone} alt="Robo quebrado" />
        <h2>Ops! Página não encontrada.</h2>
        <button className="botao" onClick={() => navegar(-1)}>
          Voltar
        </button>
      </div>
    </div>
  );
}
