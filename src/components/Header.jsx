import { useState, useEffect, useRef } from 'react'
import { Link } from "react-router-dom";
import logo from '/logo.svg';
import '../styles/Header.scss';

import { CiMenuFries as Hamburger } from "react-icons/ci";
import { TfiClose as CloseIcon } from "react-icons/tfi";
import { CgGitFork } from "react-icons/cg";
import { MdOutlineStar } from "react-icons/md";
import { 
  PiLightbulbFilamentLight as Skill,
  PiHouseLight as Home,
  PiDesktopLight as Project,
  PiUserLight as About,
} from "react-icons/pi";
import { HiOutlineAcademicCap as Education } from "react-icons/hi2";


export default function Header(){

  const dropDownRef = useRef(null)
  const [isActive, setIsActive] = useState(false)
  const onClick = (event) => {
    event.stopPropagation();
    setIsActive(!isActive);
  }
  const close = () => {
    setIsActive(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        close();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [dropDownRef]);

  return(
    <>
      <nav className="menu">
          <Link to="/"> 
              <img className="logo" src={logo} alt='Logo do site'/>
          </Link>
          <div className={`links ${isActive ? "active" : "inactive"}`} ref={dropDownRef}>
              <Link className="link" to="/" onClick={() => {scrollToSection("intro"); close();}}> <Home/> Home</Link>
              <Link className="link" to="/" onClick={() => {scrollToSection("skill"), close();}}> <Skill/> Habilidades</Link>
              <Link className="link" to="/" onClick={() => {scrollToSection("projects"), close();}}><Project/> Projetos</Link>
              <Link className="link" to="/about" onClick={() => close()}> <About/> Sobre</Link>
              <Link className="link" to="/education" onClick={() => close()}> <Education/> Formação</Link>
              
              <button>
                <a href="https://github.com/jaciteixeira/" target='_blank'>
                  <CgGitFork /> 
                  <MdOutlineStar/>
                </a>
              </button>
          </div>
          <div
              className="hamburger" 
              onClick={onClick}
          >
              {isActive ? <CloseIcon /> : <Hamburger />}
          </div>
      </nav>
    </>
  )
}