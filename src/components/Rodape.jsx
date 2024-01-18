import { Link } from "react-router-dom";
import logo from '../assets/logo-white.svg';
import { FaEnvelope, FaGithubSquare } from 'react-icons/fa';
import '../styles/Rodape.scss'

function Rodape(){
    return(
        <div>
            <footer className="rodape">
                <Link to="/"> 
                    <img className="logo" src={logo} alt='Logo do site'/>
                </Link>
                <p>&copy; 2024 | Todos os direitos reservados.</p>
                <div className="icons-social">
                    <a href='mailto:jaci9306@gmail.com?subject=Contato através do portfolio@http://mail.google.com' target="_blank"> 
                        <FaEnvelope />
                    </a>
                    <a href="http://github.com/jaciteixeira" target="_blank">
                        <FaGithubSquare/>
                    </a>
                </div>
            </footer>
        </div>
    )
}

export default Rodape