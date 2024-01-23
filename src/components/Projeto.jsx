import React from 'react';
import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa';

const Projeto = (props) => {
  return (
    <>
      <div>
        <img className='foto' src={props.src} alt={props.alt} />
      </div>
      <div>
        <h2>{props.titulo}</h2>
        <p>{props.descritivo}</p>
        <a href={props.repositorio}>
          <FaGithub  />
        </a>
        <div>
          {props.linguagens.map((linguagem, index) => (
            <img key={index} src={linguagem.src} alt={linguagem.alt} />
          ))}
        </div>
      </div>
    </>
  );
};

Projeto.propTypes = {
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
