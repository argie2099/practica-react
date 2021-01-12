import React from 'react'
import PropTypes from 'prop-types'

const Banner = ({titulo, subtitulo, imagen, boton}) => (
    <>
        <div className="main-banner img-container m-mb-2" id="main-banner">
            <div className="ed-grid lg-grid-6">
                <div className="lg-cols-4 lg-x-2">
                <img className="main-banner__img" src={imagen} alt="Banner" />
                <div className="main-banner__data s-center">
                    <p className="t2 s-mb-0">{titulo}</p>
                    <p>{subtitulo}</p>
                    <a href="/" className="button">{boton}</a>
                </div>
                </div>
            </div>
        </div>
    </>
)

Banner.propTypes = {
    titulo: PropTypes.string,
    subtitulo: PropTypes.string,
    imagen: PropTypes.string,
    boton: PropTypes.string
}

Banner.defaultProps = {
    titulo: 'Título de banner',
    subtitulo: 'Subtitulo de banner',
    imagen: '#',
    boton: 'Boton'
}

export default Banner