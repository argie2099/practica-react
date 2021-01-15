import axios from 'axios';
import React, { Component } from 'react';
import Banner from '../Moleculas/Banner'
import CursosGrid from '../Organismos/CursosGrid';


class Shop extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            cursos: []
        }
    }

    render() { 
        const { cursos } = this.state
        return ( 
            <>
                <Banner titulo="Mi proyecto React" subtitulo="Para empezar a chambear" boton="Chambear ahora" imagen="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" />
                
                <CursosGrid cursos={cursos} />
            </>
            );
    }

    componentDidMount() {
        axios.get('https://my-json-server.typicode.com/argie2099/practica-react/cursos')
        .then(res => {
            this.setState({
            cursos: res.data
        })
    })}
}

export default Shop