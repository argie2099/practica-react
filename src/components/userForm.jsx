 /* eslint-disable */ 

import React from 'react'

//ESTE ES UN COMPONENTE DE CLASE

// SE DECLARA UNA CLASE (NUESTRO MODULO) QUE EXTIENDE A React.Component

class userForm extends React.Component {
    constructor(props) {
        super(props);
        // DECLARA ESTADOS (VALORES DINAMICOS) VACIOS AL PRINCIPIO
        this.state = {
            name: "",
            mail: ""
        }
        //EL METODO BIND ASIGNA CONTEXTO AL THIS, EN ESTE CASO EL THIS DEL COMPONENTE MISMO
        this.replaceName = this.replaceName.bind(this)
        this.replaceMail = this.replaceMail.bind(this)
    }
    //
    replaceName (e) {
        //EL CAMBIO DEL ESTADO SE HACE CON setState Y NO DIRECTAMENTE
        this.setState({
            name: e.target.value
        })
    }

    replaceMail (e) {
        this.setState({
            mail: e.target.value
        })
    }
    
    // ESTA FUNCIÓN RENDER SE LLAMA AUTOMÁTICAMENTE CUANDO SE INSTANCIA UN COMPONENTE

    render() {
        return (
            // SE UTILIZA className EN REEMPLAZO A class PARA EVITAR CONFLICTOS CON EL OBJETO CLASE
            <div className="form">
                <form>
                    <p>{this.props.name}</p>
                    <input type="text" placeholder="Ingrese nombre completo" onChange={this.replaceName}/>
                    <br/>
                    <input type="email" placeholder="ejemplo@ejemplo.com" onChange={this.replaceMail}/>
                    <br/>
                </form>
                <div id="divisor">
                    <h3>{`Hola ${this.state.name}.`}</h3>
                    <h3>{`Tu mail es: ${this.state.mail}`}</h3>
                </div>
            </div>
        )
    }
    // ESTE MÉTODO SE EJECUTA AL FINALIZAR EL RENDER (MONTAJE) DEL COMPONENTE Y POR ENDE YA SE PUEDEN ACCEDER
    // A LOS ELEMENTOS DEL DOM MEDIANTE JAVASCRIPT NORMAL
    componentDidMount() {
        let divisor = document.getElementById('divisor')
        divisor.style.backgroundColor = '#dddddd'
    }
    // ESTE MÉTODO SE EJECUTA AL FINALIZAR UNA ACTUALIZACION DE ESTADO
    // EL MÉTODO RECIBE DOS PARÁMETROS: EL PRIMER PARAMETRO SON LAS PROPIEDADES
    // ANTERIORES AL CAMBIO Y EL SEGUNDO PARAMETRO SON LOS ESTADOS ANTERIORES AL CAMBIO
    componentDidUpdate(prevProps, prevStates) {
        console.log(prevProps);
        console.log(prevStates);
    }
}
// SE EXPORTA EL FORMULARIO

export default userForm