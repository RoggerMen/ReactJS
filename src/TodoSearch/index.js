import React, { useContext, useState } from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';

// RECIBIMOS LOS ATRIBUTOS DEL COMPONENTE PADRE "app.js"
// Y POR MEDIO DE "props" LO RECIBIMOS EN EL COMPONENTE HIJO "TodoSearch.js"
function TodoSearch() {

  const {
    searchValue,
    setSearchValue,
  } = useContext(TodoContext);

  // EL "state(estado)" ES UN ARRAY
  // Necesitamos 2 elementos en nuestro ARRAY
  // EL "state" y "setState" comunmente 
  // PERO SI TIENE OTRO "nombre" y POR CADA NOMBRE QUE TENGAMOS TENEMOS QUE CAMBIARLOS POR EJEMPLO: 
  // SI TENEMOS -> [patito, setPatito] OTRO: [useBotton, setUseBotton]

  // ADEMAS HAY OTRO PEDACITO IMPORTANTE DE "useState()" ES QUE NOS PERMITE DEFINIR UN ESTADO INICIAL  
  // EL ESTADO INICIAL ES LO QUE NECESITES PUEDE SER UN "null","undefined","string",etc.

  // EL "searchValue" ES LA VARIABLE DEL ESTADO INICIAL QUE AGARRA DE "useState("")"

  // UTILIZAMOS A LA FUNCION ACTUALIZADORA "setSearchValue"
/*********************************** 
React.useState(""): Creación de un estado
React.useState es una función de React que crea un estado local para el componente. La función toma un valor inicial como parámetro (en este caso, "", un string vacío) y devuelve un array con dos elementos:

El valor actual del estado.
Una función que actualiza ese valor.
En este caso, searchValue se inicializa como un string vacío (""). El estado cambiará cuando llamemos a setSearchValue con un nuevo valor.
*******************************************
*** EL ESTADO LO MANDAMOS A EL COMPONENTE PADRE PARA QUE SE COMUNIQUEN DE PADRE A HIJO **/

  //const [searchValue,setSearchValue] = React.useState("");

  // DE ESTA MANERA VEMOS COMO SE ESTAN GUARDANDO LOS DATOS CON ESTADOS
  //console.log("Los Usuarios buscan todos de " + searchValue);
                 

  return (  
    // EL ESTADO LO COMUNICAMOS CON EL "input" DE LOS USUARIOS
    // EN EL "input" QUEREMOS QUE EL VALOR DE ESE "input" EL VALOR DE ESE "input" ESTE CONECTADO CON MI "ESTADO"
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
    // POR LO TANTO LA PROPIEDAD "value" DE LOS "input" VOY A DECIRLE Q SEA IGUAL A ESE ESTADO QUE HEMOS CREADO "searchValue"
    // Y POR ENDE LO PRIMERO QUE QUIERO QUE TENGA ES "STRING VACIO" QUE VIENE DEL "useState("")"
    // PARA QUE LOS USUARIOS CUANDO RECIEN ENTREN NO TENGAN NADA, APAREZCA EL PLACEHOLDER, NO TENGA NADA EN BUSQUEDA
    // Y CUANDO EL USUARIO YA EMPIECE A ESCRIBIR ESO QUE ESCRIBAN SEA UN NUEVO STRING CON LO QUE SEA QUE ESCRIBAN EN EL "input"
    // Y ASI SE VUELVE UN CICLO QUE VA REEMPLAZANDO EL VALOR LO QUE SE ESCRIBA EN EL "input"

      value={searchValue}
      
    onChange={ (e) =>{
      //console.log("Escribiste en el TodoSearch");
      //FUNCION ACTUALIZADORA DE NUESTRO ESTADO LA FUNCION"setSearchValue()" 
      // LE TENEMOS QUE DECIR CUAL ES EL NUEVO VALOR QUE TENEMOS QUE GUARDAR EN NUESTRO ESTADO
      // LO QUE SEA QUE HAYAN COLOCADO EN EL "input" ES LO QUE TENEMOS QUE GUARDAR EN EL NUEVO ESTADO, "EN NUESTRA FUNCION ACTUALIZADORA"(setSearchValue())
      // PARA QUE ENTONCES SEA EL NUEVO "value" DEL "input" 
      // Y NO SOLAMENTE PARA QUE EL USUARIO PUEDAN VER QUE ESCRIBIERAN ALGO SI NO QUE TAMBIEN SE ESTE GUARDANDO UNA Y OTRA VEZ EN EL ESTADO DE REACT JS 
      // con esta instruccion hacemos que guarde este valor en el "searchValue" Y ESE VALOR COLOCADO EN EL "input" LO COLOQUES COMO EL NUEVO "value" DEL "input" y ASI COMO SI FUERA UN CICLO

      setSearchValue(e.target.value);

      //console.log(e.target);
      //console.log(e.target.value);
    }} />
  );
}

export { TodoSearch };