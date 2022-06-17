import React from "react";
import "./TodoCard.scss";
import bin from "../../assets/images/bin.png"

const TodoCard = ({ todo,handleCompleted, handleRemoveItem, index }) => {
  return (
    <div className="todo-card">
      <div className="todo-card__inputs">
        <label htmlFor="input"></label>
        <input className="todo-card__checkbox" input="input" type="checkbox" onChange={handleCompleted}/>
        <p className="todo-card__text">{todo}</p>
      </div>

      <button className="todo-card__button" onClick={handleRemoveItem} id={index}><img className="todo-card__image" src={bin} alt=""/></button>
    </div>
  );
};

export default TodoCard;
