import React from "react";
/*CREAMOS LA FUNCION COMO SI FUERA UN CUSTOM HOOK */

// La "NOMENCLATURA" que REACTJS nos pide que sigamos de FORMA OPCIONALMENTE OBLIGATORIA ES QUE SIEMPRE EMPECEMOS POR "use" para diferenciarlos de FUNCIONES NORMALES y verlo COMO UN "Custom Hooks" QUE LA MAYORIA USAN EL "use", asi como el useEffect, useState,etc
// "localStorage" LLAMA A SU CONTENIDO INTERNO "item" TODO PARA "localStorage" SON "items"
function useLocalStorage(itemName, initialValue) {
  //************* LOCAL STORAGE ****************

  const [item, setItem] = React.useState(initialValue);

  const [loading, setLoading] = React.useState(true);

  const [error, setError] = React.useState(false);

  // AQUI ENCAPSULAMOS NUESTRA LOGICA DE DE APLICACION
  React.useEffect(() => {
   setTimeout(() => {
    try {
      // OBTENEMOS DEL LOCAL STORAGE EL NOMBRE DE NUESTRO "localStorage" ASIGNADO Q ES "TODOS_V1"
    const localStorageItem = localStorage.getItem(itemName);

    let parsedItem;

    // CAMBIAMOS EL "localStorageTodos" POR EL "localStorageItem"
    // SI "localStorageTodos" es null, undefined o no existe en el localStorage
    // si no hay contenido en "localStorageTodos" es decir si es null, vacio, undefined o cualquier valor que de false, entonces inicializamos "parsedTodos"(tambien cambiamos a parsedItem) como un array vacio
    if (!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = initialValue;
    } else {
      parsedItem = JSON.parse(localStorageItem);
      setItem(parsedItem);
    }

    setLoading(false);

    } catch (error) {
      setLoading(false);
      setError(true);
    }
   }, 2000)
  },[]);

  /********* FUNCION "saveTodos" *************/
  /******** SE CONVIERTE EN saveItem ***********/
  // GUARDAMOS los "todos" en el localStorage
  // OSEA SE GUARDAN EN CACHE SI LE DAMOS CLICK EN EL LIKE O SI ELIMINAMOS LA X SE GRABA Y SI REFRESCAMOS SE QUEDA TAL COMO ESTA SEGUN LO ELIMINADO O LIKEADO
  // el "newItem" VIENE DEL COMPONENTE "App" QUE ES EL "newTodos" QUE ES UNA COPIA DE UN ARREGLO QUE PASA POR EL ESTADO "useState" "item" que viene a ser el lo que contiene "parsedItem"
  // Y A ESTO ES LO QUE AGREGA AL "localStorage" Y TRABAJA DE ESA MANERA LA PERSISTENCIA DE DATOS
  const saveItem = (newItem) => {
    // enviamos el nuevo array de "todos"
    // para que los guarde en el localStorage y en el estado
    localStorage.setItem(itemName, JSON.stringify(newItem));
    // AQUI GUARDAMOS Y HACEMOS LOS CAMBIOS DEL NUEVO TODO QUE RECIBA Y CON EL "localStorage" HACEMOS LA PERSISTENCIA
    setItem(newItem);
  };

  // RETORNAMOS LO QUE QUEREMOS UTILIZAR EN "App.js"
  // ENTONCES EXPORTAMOS COMO UN ARRAY LA FUNCION "item"(estado inicial ) Y "saveItem" QUE PASA A SER(estado actualizador) OSEA RETORNAMOS EL ESTADO DE ESTE "CUSTOM HOOK"
  // EL "item" y "saveItem" se retornan al componente App donde por medio de una desestructuracion de arreglos AGARRA LO RETORNADO DE "useLocalStorage"
  // CAMBIAMOS DE ARRAY A UN OBJETO POR EL "useEffect" QUE ESTAMOS USANDO Y PARA NO TENER PROBLEMAS CON LAS POSICIONES AL MOMENTO DE LLAMAR COSA QUE SI PASARIA CON UN ARRAY
  // EN EL "index.js" CAMBIAMOS TAMBIEN LOS CORCHETES POR LAS LLAVES
  return {item, saveItem, loading, error};
}

export { useLocalStorage };



/**** EL COMPONENTE "TodoContext" TIENE TODA LA LOGICA ****/

// el "localStorage" NORMALMENTE GENERA ERRORES,PROBLEMAS
// SI TENEMOS PROBLEMAS CON EL "localStorage" SOLO BORRAMOS EL ELEMENTO
//localStorage.removeItem("TODOS_V1");
//window.location.reload();

// ESTOS "Todos" LO VOLVEREMOS UN ESTADO QUE NOSOTROS PODAMOS CAMBIAR, COMPARTIR POR TODOS LOS COMPONENETES Y ACTUALIZAR DEPENDIENDO DE LAS INTERACCIONES DE LOS USUARIOS 

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALA', completed: false },
//   { text: 'Usar Estados Derivados Listos', completed: true }
// ];

// // AGREGAMOS NUEVO ELEMENTO AL "localStorage"
// // CON "setItem()" donde colocaremos el "nombre del item" donde guardaremos informacion en el "localStorage"

// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));



