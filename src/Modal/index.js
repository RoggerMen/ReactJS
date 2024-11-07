import React from "react";
// esto es para crear los portales
import ReactDOM from "react-dom";
import "./Modal.css";

function Modal({children}) {
    // ENVIAMOS EL CONTENIDO QUE QUEREMOS TELETRANSPORTAR, GRACIAS AL "ReactDOM.createPortal"
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            {children}
        </div>,
        document.getElementById("modal")
    );
    // AL "ReactDOM" TENEMOS QUE DECIRLE A DONDE QUEREMOS TELETRANSPORTAR TODO ESTE CONTENIDO
    // DONDE LO ENVIAMOS AL DE LA CARPETA "public" EL "index.html" DONDE ESTA EN "div" CON EL "id=modal"
}

export {Modal};

