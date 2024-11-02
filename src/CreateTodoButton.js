import './CreateTodoButton.css';

function CreateTodoButton() {
  return (
    <button className="CreateTodoButton" onClick={(e) => {
      console.log('Le diste click...');
      console.log(e);
      console.log(e.target);
    }}>+</button>
  );
}

export { CreateTodoButton };