import React, { useState } from "react";
import "./TodoForm.css"
import { TodoContext } from "../TodoContext";

function TodoForm() {
    // EL "setOpenModal" ES DE UN ESTADO GLOBAL
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    // NUEVO ESTADO LOCAL
    const [newTodoValue, setNewTodoValue] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (e) => {
        setNewTodoValue(e.target.value);
    }

    return (
        <form onSubmit={onSubmit}
        >
            <label>Escribe tu nuevo TODO</label>
            <textarea 
                placeholder=" Cortar cebolla para el almuerzo"
                value={newTodoValue}
                onChange={onChange}
            />
        <div className="TodoForm-buttonContainer">
            <button type="button" className="TodoForm-button TodoForm-button--cancel" onClick={onCancel}>
                Cancelar
            </button>

            <button type="submit" className="TodoForm-button TodoForm-button--add">
                Añadir
            </button>
        </div>
        </form>
    )
}

export { TodoForm };



