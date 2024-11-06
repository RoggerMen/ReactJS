
import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

function App() {
 

// TODA ESTA INFORMACION SE LA ENVIAMOS AL COMPONENTE "AppUI"
// VAN COMO ATRIBUTOS CON SUS VALORES Y ALLA POR MEDIO DEL PROPS RECIBE EL VALOR DE ESE ATRIBUTO
// ENVIAMOS EL "AppUI" COMO HIJO (children) DE "TodoProvider"
  return(
    <TodoProvider>
    <AppUI 
    // loading={loading}
    // error={error}
    // completedTodos={completedTodos}
    // totalTodos={totalTodos}
    // searchValue={searchValue}
    // setSearchValue={setSearchValue}
    // searchedTodos={searchedTodos}
    // completeTodo={completeTodo}
    // deleteTodo={deleteTodo}
    />
    </TodoProvider>
  )

}

export default App;