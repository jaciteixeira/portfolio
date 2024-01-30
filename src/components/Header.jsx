import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '/logo.svg';
import '../styles/Header.scss';

import { CiMenuFries as Hamburger } from 'react-icons/ci';
import { TfiClose as CloseIcon } from 'react-icons/tfi';
import { CgGitFork } from 'react-icons/cg';
import { MdOutlineStar } from 'react-icons/md';
import { 
  HiOutlineAcademicCap as Education,
  HiOutlineComputerDesktop as Project ,
  HiOutlineHome as Home,
  HiOutlineLightBulb as Skill ,
  HiOutlineUser as User ,
} from 'react-icons/hi2';

export default function Header() {
  
  const localizacao = useLocation();
  const [activeSection, setActiveSection] = useState('intro');
  const [isActive, setIsActive] = useState(false);
  const dropDownRef = useRef(null);

  const onClick = (event) => {
    event.stopPropagation();
    setIsActive(!isActive);
  };

  const close = () => {
    setIsActive(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    const skillSection = document.getElementById('skill');
    const projectsSection = document.getElementById('projects');

    if (
      skillSection &&
      window.scrollY >= skillSection.offsetTop &&
      window.scrollY < projectsSection.offsetTop
    ) {
      setActiveSection('skill');
    } else if (projectsSection && window.scrollY >= projectsSection.offsetTop) {
      setActiveSection('projects');
    } else {
      setActiveSection('intro');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   // Quando a rota muda, ajuste o scroll
  //   scrollToSection(activeSection);
  // }, [localizacao.pathname, activeSection]);

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

  return (
    <>
      <nav className="menu">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo do site" />
        </Link>
        <div className={`links ${isActive ? 'active' : 'inactive'}`} ref={dropDownRef}>
          <Link
            className={`link ${(activeSection === 'intro' && localizacao.pathname === '/') ? 'linkDestacado' : ''}`}
            to="/"
            onClick={() => {
              scrollToSection('intro');
              close();
              setActiveSection('intro');
            }}
          >
            <Home /> Home
          </Link>
          <Link
            className={`link ${activeSection === 'skill' && localizacao.pathname === '/' ? 'linkDestacado' : ''}`}
            to="/"
            onClick={() => {
              scrollToSection('skill');
              close();
            }}
          >
            <Skill /> Habilidades
          </Link>
          <Link
            className={`link ${activeSection === 'projects' && localizacao.pathname === '/' ? 'linkDestacado' : ''}`}
            to="/"
            onClick={() => {
              scrollToSection('projects');
              close();
            }}
          >
            <Project /> Projetos
          </Link>
          <Link
            className={`link ${localizacao.pathname === '/about' ? 'linkDestacado' : ''}`}
            to="/about"
            onClick={() => close()}
          >
            <User/> Sobre
          </Link>
          <Link
            className={`link ${
              localizacao.pathname === '/education' ? 'linkDestacado' : ''
            }`}
            to="/education"
            onClick={() => close()}
          >
            <Education /> Formação
          </Link>

          <button>
            <a href="https://github.com/jaciteixeira/" target="_blank">
              <CgGitFork />
              <MdOutlineStar />
            </a>
          </button>
        </div>
        <div className="hamburger" onClick={onClick}>
          {isActive ? <CloseIcon /> : <Hamburger />}
        </div>
      </nav>
    </>
  );
}
