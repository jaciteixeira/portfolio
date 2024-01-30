import PropTypes from 'prop-types';
import '../styles/Certificado.scss'

export default function Certificado(props){
    return(
        <>
        <div className="certificados">
          <h2> {props.titulo} </h2>
            {props.certificados.map((certificado, index) => (
              <div className="certificado" key={index} >
                <a href={certificado.url} target="_blank" >
                  <img src={certificado.src} alt={certificado.alt} />
                </a>
                <p> {certificado.descricao} </p>
              </div>
            ))}
        </div>
        </>
    )
}

Certificado.propTypes = {
    titulo: PropTypes.string.isRequired,
    certificados: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired, 
            alt: PropTypes.string.isRequired, 
            url: PropTypes.string.isRequired,
        })
    ).isRequired,
}