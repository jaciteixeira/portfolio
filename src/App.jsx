import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import WhatsappIcon from "./components/WhatsappIcon";
import BackToTopButton from "./components/BackToTopButton";
import image from "./assets/image-mulher-sentada.svg";
import foto from "./assets/foto.svg";
import { 
  FaJava,
  FaJs,
  FaPython
 } from 'react-icons/fa';

import "./App.scss";

export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <Cabecalho />
        <Outlet/>
        <section id="icons-rodape">
          <WhatsappIcon />
          <BackToTopButton />
        </section>

        <Rodape />
      </div>
    </>
  );
}
