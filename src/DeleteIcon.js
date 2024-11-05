import React from 'react'
import TodoIcon from './TodoIcon'

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