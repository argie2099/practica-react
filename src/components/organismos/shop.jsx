import React from 'react'
import Banner from '../Banner'
import Card from '../Card'

const cursos = [
    {
        title: 'JavaScript para niños',
        desc: 'Aprende tu primer lenguaje de programación desde sus bases. Con él podrás darle instrucciones a tu computadora, crear pequeños programas y scripts.',
        professor: 'Marina Charris',
        image: 'https://edteam-media.s3.amazonaws.com/courses/big/0903d86f-5e06-46f2-87e6-6ad3020a6bec.png',
        price: 20
    },
    {
        title: 'CSS Avanzado',
        desc: 'Aprende a profundidad los diversos módulos que tiene CSS3.',
        professor: 'Alexis Mora Angulo',
        image: 'https://edteam-media.s3.amazonaws.com/courses/small/262e68b3-eea2-43f2-9e9a-febc106a8295.png',
        price: 48
    },
    {
        title: 'CSS desde cero (2020)',
        desc: 'Haz hermosa la web con el único lenguaje creado para diseño.',
        professor: 'Alvaro Felipe',
        image: 'https://edteam-media.s3.amazonaws.com/courses/small/daa72e4e-c5d0-406e-9f6d-01e646bf719b.png',
        price: 30
    },
    {
        title: 'JavaScript desde cero (2020)',
        desc: 'Domina las bases del único lenguaje que te da la oportunidad de trabajar del lado del cliente y del lado del servidor.',
        professor: 'Beto Quiroga',
        image: 'https://edteam-media.s3.amazonaws.com/courses/small/61e5a210-8dab-412e-a6dc-802c070cc18c.jpg',
        price: 35
    },
    {
        title: 'Inglés desde cero',
        desc: 'Aprende las bases del lenguaje que te abre las puertas en cualquier parte del mundo.',
        professor: 'David Salomón',
        image: 'https://edteam-media.s3.amazonaws.com/courses/small/4feb100b-5d47-4daf-b421-9983c5ecdfa8.png',
        price: 32
    },
    {
        title: 'Python desde cero',
        desc: 'Aprende los fundamentos de uno de los lenguajes más importantes de la actualidad y crea un administrador de contraseñas.',
        professor: 'Pablo España',
        image: 'https://edteam-media.s3.amazonaws.com/courses/medium/85d3d7e4-19db-4cff-a4cb-cbead813b6b5.png',
        price: 28
    },
]

const Shop = () => (
    <>
        <Banner titulo="Mi proyecto React" subtitulo="Para empezar a chambear" boton="Chambear ahora" imagen="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" />

        <div className="ed-grid m-grid-4">
            {
                cursos.map( s => <Card desc={s.desc} title={s.title} professor={s.professor} price={s.price} image={s.image} />)
            }
        </div>
    </>
)

export default Shop