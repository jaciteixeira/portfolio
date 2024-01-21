import React from "react";
import { Link } from "react-router-dom";
import logo from '/logo.svg';
import '../styles/Header.scss';


export default function Header(){

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
                <Link className="link" to="/" onClick={() => scrollToSection("intro")}>Home</Link>
                <Link className="link" to="/" onClick={() => scrollToSection("skill")}>Habilidades</Link>
                <Link className="link" to="/" onClick={() => scrollToSection("projects")}>Projetos</Link>
                <Link className="link" to="/about">Sobre</Link>
                <Link className="link" to="/education">Formação</Link>
            </div>
        </nav>
    </>
    )
}