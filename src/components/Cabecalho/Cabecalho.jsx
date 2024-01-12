import { Link, useLocation } from "react-router-dom";
import logo from '/logo.svg'
import './Cabecalho.css'

function Cabecalho(){

    // const rotaAtual = useLocation();

    return(
        <header className="cabecalho">
            <img className="logo" src={logo} alt='Logo escrito o nome Jaci com um ponto no final' />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Experience</li>
                <li>Projets</li>
                <li>Contact</li>
                
            </ul>
        </header>
    )
}

export default Cabecalho