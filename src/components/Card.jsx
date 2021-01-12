import React from 'react'
//Importa propTypes para settear valores por defecto si no se los pasa como atributos al instanciar los componentes
import PropTypes from 'prop-types'
//ESTE ES UN COMPONENTE PRESENTACIONAL
//Declara una constante para usarse como modulo con sintaxis JSX 
const Card = ({text, professor}) => (
    <>
        <div className="card">
            <h3>{professor}</h3>
            <p>{text}</p>
        </div>
    </>
)

//Declara los tipos de datos que reciben los módulos

Card.propTypes = {
    text: PropTypes.string,
    professor: PropTypes.string
}

//Declara valores por defecto

Card.defaultProps = {
    text: "No se ingresó texto",
    professor: "Profesor no asignado"
}
//Se exporta la constante "Card" con toda su configuración
export default Card