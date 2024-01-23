import React from 'react';
import PropTypes from 'prop-types';
import { IoGitBranch } from "react-icons/io5";

import '../styles/Projeto.scss'

const Projeto = (props) => {
  return (
    <>
    <div className='projeto'>
      
      <div className='foto'>
        <a href={props.link}>
          <img src={props.src} alt={props.alt} />
        </a>
      </div>
      <div className='linguagens'>
        <p>LINGUAGENS UTILIZADAS:</p>
        {props.linguagens.map((linguagem, index) => (
          <img key={index} src={linguagem.src} alt={linguagem.alt} />
          
        ))}
      </div>
      <div className='texto'>
        <h2>
          {props.titulo} {" "}
          <a href={props.repositorio}></a>
        </h2>
        <p>
          {props.descritivo}
        </p>
      </div>
      <div>
        <button>
          <IoGitBranch />
        </button>

      </div>
    </div>
    </>
  );
};

Projeto.propTypes = {
  link: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  descritivo: PropTypes.string.isRequired,
  repositorio: PropTypes.string.isRequired,
  linguagens: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Projeto;
