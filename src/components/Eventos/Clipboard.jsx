import React from "react"; //Tema 5

function Clipboard() {

    /*con este componente podemos detectar qué texto se está pegando en un Input*/ 
    let handlerClipBoard = (event) => {
        let data = event.clipboardData.getData('Text');
        
        console.log(`Texto en el clipboard: ${data || "<Sin datos>"}`);
      }
      
      return (
        <div className="input-group container">
          <input type="text" onPaste={handlerClipBoard} />
        </div>
      );
}   

export default Clipboard;