import React from 'react'
// DE LA LIBRERIA DE ICONOS DE REACT
import { TbEyeCheck } from "react-icons/tb";
import { FiDelete } from "react-icons/fi";

// PARA IMPORTAR SVG
import {ReactComponent as CheckSVG} from './check.svg';
import {ReactComponent as DeleteSVG} from './delete.svg';

import "./TodoIcon.css"

const iconTypes = {
    // Recibimos el "color" que se mando como funcion en el objeto "iconTypes"
    "check" : (color) => <CheckSVG className="Icon-svg" fill={color}/>,
    "delete" : (color) => <DeleteSVG className="Icon-svg" fill={color}/>,
}

const TodoIcon = ({type,color}) => {

  return (
    <span className={`Icon-container Icon-container-${type}`} 
    
    >
        {iconTypes[type](color)} 
    </span>
  )
}

export default TodoIcon