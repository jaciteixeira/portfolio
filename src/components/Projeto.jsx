import React from 'react';
import PropTypes from 'prop-types';
import { VscGithub as Github} from "react-icons/vsc";
import { LiaGitter as Site } from "react-icons/lia";
import { CgWebsite as Website } from "react-icons/cg";

import '../styles/Projeto.scss'

const Projeto = (props) => {
  return (
    <>
    <div className='projeto'>
      <div className='foto'>
          <img src={props.src} alt={props.alt} />
        {/* <a href={props.link}>
        </a> */}
      </div>
      <div className='linguagens'>
        <p>LINGUAGENS UTILIZADAS:</p>
        <div className='images'>
          {props.linguagens.map((linguagem, index) => (
            <img key={index} src={linguagem.src} alt={linguagem.alt} />
          ))}
        </div>
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
      <div className='botoes'>
        <a href={props.repositorio} target='_blank'>
          <button>
            <Github />
            GitHub
          </button>
        </a>

        {props.link && ( // Verifica se o link de demonstração existe
          <a href={props.link} target='_blank'>
            <button>
              <Website />
              Demo
            </button>
          </a>
        )}
      </div>
    </div>
    </>
  );
};

Projeto.propTypes = {
  link: PropTypes.string,
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
