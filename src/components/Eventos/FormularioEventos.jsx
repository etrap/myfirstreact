import React, {useState, useEffect, useRef } from "react"; //Tema 5

//Componente funcional
function FormularioEventos() {
/* //Sin refs:
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [resultado, setResultado] = useState('');
    const manejarPulsacion = (event) => {        
        setNombre(`${nombre}`);
        setApellidos(`${apellidos}`);
        setResultado(`${nombre} ${apellidos}`);
    }*/

    //Con refs:	
    const nombreRef = React.createRef();
    const apellidosRef = React.createRef();    	
    //const [contador, setContador] = useState(0);
    	
    const contador = useRef(0);
    const [resultado, setResultado] = useState('');
	
    const manejarPulsacion = (event) => {
        setResultado(`${nombreRef.current.value} ${apellidosRef.current.value}`);
        //setResultado(Math.random() + "");
        
    }
     useEffect(() => {
         //setContador(ultimoValor => ultimoValor + 1);
         contador.current = contador.current + 1;
    });

    return (
        <div className="App">
        <header className="App-header">
          <h1>Formulario en React</h1>  
          <input placeholder="Introduce tu nombre" ref={nombreRef}></input>
          <input placeholder="Introduce tus apellidos" ref={apellidosRef}></input>	
          
          {/* <input
          placeholder="Introduce tu nombre"
          onChange={(e) => {setNombre(e.target.value)}}
          >
          </input>
          
          <input
          placeholder="Introduce tus apellidos"
          onChange={(e) => {setApellidos(e.target.value)}}
          >
          </input>           */}
          
          <button onClick={manejarPulsacion}>Mostrar datos</button>
          
          <strong>{resultado}</strong>
          <div>
          {/* <div ref={contador}> */}
              El componente se ha renderizado: {contador.current}
          </div>
        </header>
      </div>        
    );
}
 
export default FormularioEventos;

