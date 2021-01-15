import React, { Component } from 'react';

const withLoader = (targetName, WrappedComponent) => {
    return class WithLoader extends Component {
        constructor(props) {
            super(props);
        }

        render() {
            return this.props[targetName].length === 0 ? <h1>Cargando...</h1> : <WrappedComponent {...this.props} />
        }
    }
}

export default withLoader