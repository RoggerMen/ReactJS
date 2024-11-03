import logo from './platzi.webp';

import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
// ESTOS "Todos" LO VOLVEREMOS UN ESTADO QUE NOSOTROS PODAMOS CAMBIAR, COMPARTIR POR TODOS LOS COMPONENETES Y ACTUALIZAR DEPENDIENDO DE LAS INTERACCIONES DE LOS USUARIOS 
const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el Curso de Intro a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'LALALALALA', completed: false },
  { text: 'Usar Estados Derivados Listos', completed: true }
];

function App() {
  // NUEVO ESTADO DE "Todos" 
  const [todos,setTodos] = React.useState(defaultTodos);

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
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  // LOGICA PARA ELIMINAR EL TEXTO 
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  // DE ESTA MANERA VEMOS COMO SE ESTAN GUARDANDO LOS DATOS CON ESTADOS  
  //console.log("Los Usuarios buscan todos de " + searchValue);

  // COMUNICAMOS ESTADOS POR MEDIO DE "props" CON EL COMPONENTE "TodoCounter"
// enviamos props(PROPIEDADES) al COMPONENETE "TodoSearch"
  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {/*renderizamos los "todos"(ESTADO ORIGINAL) APARTIR DEL ESTADO DERIVADO "searchedTodos" QUE ESTA DERIVADO DEL PRIMER ARRAY DE "todos" que es nuestro verdadero ESTADO pero filtrado con las validaciones de busquedas del otro ESTADO "searchValue" */}
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={ () => completeTodo(todo.text)}
            onDelete={ () => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      
      <CreateTodoButton />
    </>
  );
}

export default App;