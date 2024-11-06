import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}){

      //************** ESTADOS ***************/
  // NUEVO ESTADO DE "Todos" 
  // PASAMOS EL "CUSTOM HOOK" "useLocalStorage"
  // el primera argumento sera el nombre del Item donde vamos a guardar nuestros "TODOS"
  // Y el segundo argumento sera el ESTADO INICIAL(En este caso sera un array vacio pero podemos colocarle lo que nosotros querramos)
  // al "todos" y "saveTodos" podemos llamarlo como queramos pero es lo que retorna el "CUSTOM HOOK" "useLocalStorage"
  // MAS ABAJO VEMOS COMO EL "saveTodos" agarra como PARAMETRO AL "newTodos"
  // CAMBIAMOS DE CORCHETES A LLAVES(DE ARRAY A OBJETO)
  // LLAMAMOS IGUAL A NUESTRO "Custom Hook" PARA REFERENCIA NUESTROS OBJETOS
  // UTILIZAMOS LA SINTASIX PARA RENOMBRAR PROPIEDADES DE UN OBJETO LA CUAL SE UTILIZA EL ":"(dos puntos) Y PARA YA NO ESTAR CAMBIANDO TODO POR EL CAMBIO QUE HICIMOS DE ARRAY A OBJETO Y POR LO QUE ANTES DESESTRUCTURABAMOS EL ARRAY PORQUE SOLO HABIA 2 ELEMENTOS QUE NOS DABA(un estado inicial y un estado actualizador) Y JALABAMOS SEGUN LA POSICION PERO AHORA NO IMPORTA LA POSICION Y NOSOTROS REFERENCIAMOS AL OBJETO CON MAS PROPIEDADES DE ACUERDO A COMO ESTA EN EL "Custom Hook"
  // ENTONCES CON LOS ":" RENOMBRAMOS LAS PROPIEDADES DEL OBJETO
  // AGARRAMOS LA INFORMACION DE LO QUE RETORNA EL "Custom Hook" "useLocalStorage"
  const {item:todos,saveItem:saveTodos, loading, error,} = useLocalStorage("TODOS_V1",[]);

  const [searchValue,setSearchValue] = React.useState("");

  // ESTADOS DERIVADOS
   // A ESTA VARIABLE NO PODEMOS ASIGNARLE UN VALOR FIJO EJM: 4 , 17, etc.
  // TENEMOS QUE HACER CALCULO EN ESPECIFICO BASANDONOS EN EL ESTADO ANTERIOR POR EJEMPLO DEL "Todo"
  // ESA DOBLE NEGACION (!!) HACE QUE LO CONVIERTA A "BOOLEANO" CUALQUIER TIPO DE DATO Y NOS DIGA QUE ESTAMOS TRABAJANDO CON VERDADERO O FALSO
  // ASI EL "todo.completed" ME ESTE DANDO "string","int", "un numero distinto a CERO", "UN OBJETO", TUVIERA ALGO POR EL ESTILO le decimos que es UN VALOR "VERDADERO" Y SI FUERA UN "false" OSEA UN "0", "undefined", LO QUE SEA QUE DE NEGATIVO PUES SERA NEGATIVO(false)
  // "!!"" CUANDO COLOCAMOS DOBLE NEGACION ES PARA SABER YA DESDE EL PRINCIPIO SI ESTAMOS TRABAJANDO CON VALORES FALSOS O VERDADEROS
  const completedTodos =  todos.filter(todo => !!todo.completed).length;

  // ------------------- REVISAR SI SE RENDERIZA CON "defaultTodos" YA QUE CON "todos" QUE ES DEL ESTADO SI SE PUEDE -------------------
  // PUEDE SER CON "defaultTodos" o "todos" ya que "todos" almacena a "defaultTodos" CON EL ESTADO "useState"
  const totalTodos = todos.length;

  /********* EJEMPLO DE "useEffect" *************/
  // console.log("Log 1");
  // COMO ARGUMENTO DEL "useEffect" TENEMOS QUE ENVIAR UNA FUNCION Y DENTRO DE ESA FUNCION ENVIAMOS LO QUE QUERRAMOS
  // NOS DA EL CONTENIDO DE "useEffect" COMO SI FUERA ASINCRONICO PORQUE SE DEMORA
  // React.useEffect(() => {
  //   console.log("Log 2");
  // })

  // PODEMOS ENVIAR UN 2DO ARGUMENTO QUE TENGA UN "ARRAY" 
  // PODEMOS COLOCARLE INFORMACION, ESTADOS O INCLUSO PODEMOS DEJARLO VACIO
  //PERO CUANDO LO DEJAMOS VACIO ESTE YA NO NOS RENDERIZA NI NOS DA EL CONTENIDO DEL "useEffect"
  // React.useEffect(() => {
  //   console.log("Loooooog 2");
  // }, []);

  // EL CONTENIDO DE "useEffect" SE RENDERIZA Y SE MUESTRA CADA VEZ QUE TIENE UN CAMBIO EL "totalTodos"
  // React.useEffect(() => {
  //   console.log("Loooooog 2");
  // }, [totalTodos]);

  //console.log("Log 3");

  /*********************************************/

  // NUEVO ESTADO DERIVADO DEL "TodoSearch"
  const searchedTodos = todos.filter(
    (todo) => {
      // EN TODOS LOS "Todos" NO PARA LOS USUARIOS CUANDO VEAN EN PANTALLA LA APLICACION, PERO SI INTERNAMENTE, SE VOLVERA A MINUSCULAS
      // EL "includes" VA A PODER ENCONTRAR DE FORMA MAS RAPIDA TODAS LAS COINCIDENCIAS SIN IMPORTAR SI SON MAYUSUCLAS O MINUSCULAS EN PANTALLA Y CUANDO ESCRIBAS EN EL BUSCADOR 
      // RESUMIMOS EL CODIGO CREANDO DOS VARIABLES DONDE ALMACENAMOS EL "todo" y EL ESTADO "searchValue"
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
      //return todo.text.toLowerCase().includes(searchValue.toLowerCase()); 
      }
  );

// CREAMOS LA LOGICA PARA COMPLETAR LOS "Todos" PINTAR DE VERDE EL ICONO Y TACHAR EL TEXTO
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    // AQUI LLAMAMOS LA FUNCION "saveTodos" QUE TIENE LA PERSISTENCIA DEL "localStorage" Y EL NUEVO ESTADO QUE SE GUARDA EL "setTodos(newTodos)"
    saveTodos(newTodos);
  };

  // LOGICA PARA ELIMINAR EL TEXTO 
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

    return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };
