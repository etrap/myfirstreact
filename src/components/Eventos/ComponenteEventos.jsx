import React, { Component } from 'react';

export default class ComponenteEventos extends Component{
    constructor(props) {
        super(props);    
        this.state = {encendido: true};
        this.manejarPulsacion = this.manejarPulsacion.bind(this);
        this.manejarPulsacionesTeclado = this.manejarPulsacionesTeclado.bind(this);
        this.manejarDown = this.manejarDown.bind(this);
    }
      
    manejarPulsacion(event) {
        this.setState((prevState, props) => ({       
          encendido: !prevState.encendido
        }));
    }
    manejarPulsacionesTeclado(event) {
        this.setState((prevState, props) => ({       
          encendido: !prevState.encendido
        }));
    }
    manejarDown(event) {
        this.setState((prevState, props) => ({       
          encendido: !prevState.encendido
        }));
    }    
    
    render() {
        return (
        <div className="App">
            <header className="App-header">
                <button onClick={this.manejarPulsacion} onKeyPress={this.manejarPulsacionesTeclado} onKeyDown = {this.manejarDown}>
                {this.state.encendido ? 'Activado' : 'Desactivado'}
                </button>
            </header>
        </div>
        )
    }
}
//OnKeyPress=> manejarPulsacionesTeclado
//onKeyDown => manejarDown
//
//export default ComponenteEventos;
