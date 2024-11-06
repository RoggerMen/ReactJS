import React from 'react'
// O TAMBIEN './index.js'
import TodoIcon from './'

const DeleteIcon = ({onDelete}) => {
  return (
    <TodoIcon 
        type="delete"
        color="gray"
        onClick={onDelete}
    />
  )
}

export {DeleteIcon}