import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../TodoContext';
import { useContext } from 'react';
// ACA SE ENCUENTRAN TODOS LOS COMPONENTES QUE SON LA PARTE VISUAL QUE VA A RENDERIZARSE EN LA PAGINA
function AppUI({
    // loading,
    // error,
    // completedTodos,
    // totalTodos,
    // searchValue,
    // setSearchValue,
    // searchedTodos,
    // completeTodo,
    // deleteTodo,
}){

  const {
      loading,
      error,
      searchedTodos,
      completeTodo,
      deleteTodo,
  } = useContext(TodoContext);

  // DE ESTA MANERA VEMOS COMO SE ESTAN GUARDANDO LOS DATOS CON ESTADOS  
  //console.log("Los Usuarios buscan todos de " + searchValue);

  // COMUNICAMOS ESTADOS POR MEDIO DE "props" CON EL COMPONENTE "TodoCounter"
// enviamos props(PROPIEDADES) al COMPONENETE "TodoSearch"
  return (
    
    <>
    {/* IGUAL ELIMINAMOS ESTE PROP PARA USAR EL "useContext" Y YA NO ESTAR USANDO PROPS PARA IR PASANDO DATOS
    completed={completedTodos} 
    total={totalTodos} */}
      <TodoCounter />
      
        {/* ELIMINAMOS ESTOS PROPS PARA USAR EL "useContext" Y YA NO ESTAR PASANDO PROPS Y NO TENER PROBLEMAS DE "prop drilling" 
        searchValue={searchValue}
        setSearchValue={setSearchValue}*/}
      <TodoSearch />
      
      {/* USAMOS EL "useContext" con el "TodoContext.Consumer" PARA PASAR LOS DATOS AL COMPONENTE "TodoList" SE UTILIZABA <TodoContext.Consumer> </TodoContext.Consumer> DONDE RETORNABA CON UNA FUNCION (ACA IBA LAS PROPIEDADES QUE VENIAN DEL TodoContext.Provider{loading,
      error,
      searchedTodos,
      completeTodo,
      deleteTodo,}) => (ACA RETORNA TODO PARA RENDERIZAR COMPONENTES Y PROPIEDADES en parentesis)*/}
      
        <TodoList>
        {loading && 
        <>
        <TodosLoading />
        <TodosLoading />
        <TodosLoading />
        </>}
        {error && <TodosError />}
        {/*SI "loading" es false(OSEA NO ESTA CARGANDO) Y(&&) "searchedTodos"(NUESTROS TODOS) tiene una longitud igual a 0 y ES VERDADERO ENTONCES(&&) mostramos el elemento/etiqueta "p" */}
        {(!loading && searchedTodos.length === 0) && <EmptyTodos />}
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

export { AppUI };
