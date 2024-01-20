import React from "react";
import { Link } from "react-router-dom";
import logo from '/logo.svg';
import '../styles/Cabecalho.scss';


export default function Cabecalho(){

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        
        if (section) {
          window.scrollTo({
            top: section.offsetTop,
            behavior: "smooth",
          });
        }
    };

    return(
    <>
        <nav className="menu">
            <Link to="/"> 
                <img className="logo" src={logo} alt='Logo do site'/>
            </Link>
            <div className="links">
                <Link className="link" to="/home" onClick={() => scrollToSection("intro")}>Home</Link>
                <Link className="link" to="/about">Sobre</Link>
                <Link className="link" to="/home" onClick={() => scrollToSection("habilidades")}>Habilidades</Link>
                <Link className="link" to="/home" onClick={() => scrollToSection("projects")}>Projetos</Link>
                {/* <Link className="link" to="/" onClick={() => scrollToSection("contat")}>Contact</Link> */}
                <Link className="link" to="/home" onClick={() => scrollToSection("contat")}>Formação</Link>
            </div>
        </nav>
    </>
    )
}