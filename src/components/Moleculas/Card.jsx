import React from 'react'
//Importa propTypes para settear valores por defecto si no se los pasa como atributos al instanciar los componentes
import PropTypes from 'prop-types'
//ESTE ES UN COMPONENTE PRESENTACIONAL
//Declara una constante para usarse como modulo con sintaxis JSX 

//El objeto props es un único parametro 
const Card = ({professor, title, desc, price, image}) => (
    <>
    <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img src={image} alt="portadaCurso" />
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="t5 s-mb-2 s-center">
        {title}
      </h3>
      <div className="s-mb-2 s-main-center">
        <div className="card__teacher s-cross-center">
          <div className="card__avatar s-mr-1">
            <div className="circle img-container">
              <img src="path/img" alt="profesorCurso" />
            </div>
          </div>
          <span className="small">{professor}</span>
        </div>
      </div>
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="/">${price}USD</a>
      </div>
    </div>
  </article>
    </>
)

//Declara los tipos de datos que reciben los módulos

Card.propTypes = {
    professor: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string
}

//Declara valores por defecto

Card.defaultProps = {
    professor: "Profesor no asignado",
    title: "Card sin título",
    desc: 'Card sin descripción',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    price: 0
}
//Se exporta la constante "Card" con toda su configuración
export default Card