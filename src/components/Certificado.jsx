import PropTypes from 'prop-types';
import '../styles/Certificado.scss'

export default function Certificado(props){
    return(
        <>
        <div className="certificados">
          <h2> {props.titulo} </h2>
            {props.certificados.map((certificado, index) => (
              <div className="certificado" >
                <a key={index} href={certificado.url} target="_blank" >
                  <img src={certificado.src} alt={certificado.alt} />
                </a>
                <p> {certificado.descricao} </p>
              </div>
            ))}
        </div>
        </>
    )
}

Certificado.PropTypes = {
    titulo: PropTypes.string.isRequired, 
    descricao: PropTypes.string.isRequired, 
    certificados: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired, 
            alt: PropTypes.string.isRequired, 
            url: PropTypes.string.isRequired,
        })
    ).isRequired,
}