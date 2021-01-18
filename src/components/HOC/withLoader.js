import React, { Component } from 'react';

const withLoader = (targetName, WrappedComponent) => {
    return class WithLoader extends Component {
        constructor(props) {
            super(props);
        }

        render() {
            return this.props[targetName].length === 0 ? 
            <div className="ed-grid m-grid-2">
                <h1>Cargando...</h1>
            </div>
            :
            <WrappedComponent {...this.props} />
        }
    }
}

export default withLoader