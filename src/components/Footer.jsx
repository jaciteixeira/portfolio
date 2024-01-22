import { Link } from "react-router-dom";
import logo from '../assets/logo-rodape.svg';
import { 
    FaRegEnvelope as Email, 
    FaGithub as Github,
    FaWhatsapp as Whatsapp
} from 'react-icons/fa';
import '../styles/Footer.scss'

function Footer(){
    return(
    <>
        <footer >
            <div className="rodape">
                <Link to="/"> 
                    <img className="logo" src={logo} alt='Logo do site'/>
                </Link>
                <p>&copy; 2024 | Projetado e desenvolvido por <a href="">Jaci</a></p>
                <div className="icons-social">
                    <a href='mailto:jaci9306@gmail.com?subject=Contato através do portfolio'> 
                        <Email />
                    </a>
                    <a href="http://github.com/jaciteixeira" target="_blank">
                        <Github/>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=5511967208527"
                    className="whatsapp"
                    target="_blank">
                        <Whatsapp />
                    </a>
                </div>
            </div>
        </footer>
    </>
    )
}

export default Footer