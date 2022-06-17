import React from 'react'
import TodoCard from '../../components/TodoCard/TodoCard'
import "./TodoList.scss"

const TodoList = ({todoArray, handleCompleted, handleRemoveItem}) => {

  const todoCardsJSX = todoArray.map((todo, index) => {
    return <TodoCard key={index} todo={todo} index={index} handleCompleted={handleCompleted} handleRemoveItem={handleRemoveItem}/>
  })


  return (
    <div>
      {todoCardsJSX}
    </div>
  )
}

export default TodoList