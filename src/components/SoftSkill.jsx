import React from 'react';
import PropTypes from 'prop-types';


export default function SoftSkill(props) {
  return (
    <>
      <div className="image">
        <img src={props.src} alt={props.alt} />
      </div>
      <div className="texto">
        <h3>{props.titulo}:</h3>
        <p>{props.texto}</p>
      </div>
    </>
  );
}

SoftSkill.propTypes = {
  src: PropTypes.string.isRequired, 
  alt: PropTypes.string.isRequired, 
  titulo: PropTypes.string.isRequired, 
  texto: PropTypes.string.isRequired, 
}
