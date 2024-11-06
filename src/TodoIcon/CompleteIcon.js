import React from 'react'
// O TAMBIEN ASI './'
import TodoIcon from './index.js';

const CompleteIcon = ({completed, onComplete}) => {
  return (
    <TodoIcon 
        type="check"
        color={completed ? "green" : "gray"}
        onClick={onComplete}
    />
  )
}

export  {CompleteIcon}