import React from 'react'
//Importa propTypes para settear valores por defecto si no se los pasa como atributos al instanciar los componentes
import PropTypes from 'prop-types'
//ESTE ES UN COMPONENTE PRESENTACIONAL
//Declara una constante para usarse como modulo con sintaxis JSX 
const Card = ({professor, title, desc, price, image}) => (
    <>
    <article className="s-shadow-bottom">
        <div className="s-ratio-16-9 img-container s-radius-tl s-radius-tr">
            <img src={image} alt="poster" />
        </div>
        <div className="s-bg-white s-pxy-2">
            <h3>{title}</h3>
            <p className="s-mb-0">{desc}</p>
        </div>
        <footer className="s-cross-center s-bg-grey s-pxy-2 s-radius-br s-radius-bl">
            <div className="s-10 s-mr-1">
                <div className="circle ">
                <img  src="https://ed-grid.com/assets/img/alexys.jpg" alt="Profesor" />
            </div>
            </div>
            <p className="s-mb-0">{professor}</p>
            <div className="button s-to-right"> ${price} USD</div>
        </footer>
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