import axios from 'axios';
import React, { Component } from 'react';
import Banner from '../Banner'
import Card from '../Card'


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
        
                <div className="ed-grid m-grid-4">
                    {
                        cursos.map( s => <Card desc={s.desc} title={s.title} professor={s.professor} price={s.price} image={s.image} />)
                    }
                </div>
            </>
            );
    }

    componentDidMount() {
        axios.get('https://my-json-server.typicode.com/argie2099/practica-react')
        .then(res => {
            this.setState({
                cursos: res
            })
        })
    }
}
 
export default Shop