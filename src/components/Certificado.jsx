import PropTypes from 'prop-types';

export default function Certificado(props){
    return(
        <>
        <div className="certificados">
            {props.certificados.map((certificado, index) => (
              <div className="certificado" >
                <a key={index} href={certificado.url} target="_blank" >
                  <img src={certificado.src} alt={certificado.alt} />
                </a>
              </div>
            ))}
        </div>
        </>
    )
}

Certificado.PropTypes = {
    certificados: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired, 
            alt: PropTypes.string.isRequired, 
            url: PropTypes.string.isRequired,
        })
    ).isRequired,
}