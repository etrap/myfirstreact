import React, { Component } from 'react';
import PilasConvencionales from './Pilas';
import BateriasLitio from './Baterias';
import Hidrogeno from './Hidrogeno';
import Likes from './Likes';
import Bitcoins from './Bitcoins';

/*Articulo el componente contenedor de la lógica de esta aplicación	
mostramos otros componentes que son simplemente visuales 
y que no tienen ningún tipo de lógica detrás*/
class Articulo extends Component{
    //El componente de clase siempre ha de tener un método render() 
    //y tiene un ciclo de vida por el que pasa el componente
    render() {
        return (
        <div>
            <PilasConvencionales />
            <BateriasLitio />
            <Hidrogeno />
            <Likes />
            <Bitcoins/>
        </div>
        )
    }
}
 
export default Articulo;