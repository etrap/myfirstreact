import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Autonomia extends Component{
    //El compoennte de clase siempre ha de tener un método render() 
    //y tiene un ciclo de vida por el que pasa el componente
    render() {
        return (
        <ul>
            <li>Autonomía: {this.props.km.number} km </li>            
        </ul>
        )
    }   
}

Autonomia.propTypes = {
    km: PropTypes.number.isRequired
}
 
export default Autonomia;

/*OTRA FORMA:	
const Carga = (props) => {
 
    return (
        <ul>
            <li>Carga rápida en estación de repostaje: {props.carga}</li>
        </ul>
    )
}*/

