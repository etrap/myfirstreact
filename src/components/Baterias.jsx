	
import React from 'react';
import Autonomia from './Autonomia';

//Componente funcional
function BateriasLitio() {
    return (
        <div>
            <h3>Baterías eléctricas</h3>
            <p>
            Gracias a las nuevas tecnologias que afectan a las baterías, 
            la autonomía de los coches eléctricos está aumentando a pasos agigantados.
            </p>
            <Autonomia km = {400} />
            <br />
        </div>
    );
}
 
export default BateriasLitio;