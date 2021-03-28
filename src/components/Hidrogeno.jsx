import React from 'react';
import Autonomia from './Autonomia';	
const styles = {
    height: 250,
    width: 250
}	
/*Un componente puro está optimizado para obtener un rendimiento mucho mayor, 
por lo que se usan para mostrar visualmente un componente sin que exista una lógica detrás. 
Por este motivo, cuando utilizamos un componente puro, 
es recomendable utilizar valores primitivos e inmutables.
Un componente puro, sólo se actualizará cambiando los valores de su vista, 
si detecta un cambio en los valores de las propiedades (props) que se le pasan*/	
class Hidrogeno extends React.PureComponent{
    //El componente de clase siempre ha de tener un método render() 
    //y tiene un ciclo de vida por el que pasa el componente
    render() {
      return (
        <div>
          <h3>Baterías de Hidrógeno</h3>
          <p>Las baterías de Hidrogeno, es una alternativa muy interesante a las baterías electricas.</p>
          <img style={ styles } 
          src='https://www.magnuscmd.com/wp-content/uploads/2019/06/Featured.jpg' alt=''></img>
          <Autonomia km= {500}/>
        </div>  
      )
    }
  }
   
  export default Hidrogeno;