import React from "react";

const Table = (props) => {
  return (
    <div className="showItems">
      
      {props.todo.map((elem) => {
        return (
          <div
            className={
              props.editing && props.currentid == elem.id
                ? "eachItemEdit"
                : "eachItem"
            }
            key={elem.id}
          >
            <h3>{elem.name}</h3>
            <div className="todo-btn">
              <i
                className="far fa-edit add-btn"
                title="Edit Item"
                onClick={() => props.onToggleEdit(elem)}
              ></i>
              <i
                className="far fa-trash-alt add-btn"
                title="Delete Item"
                onClick={() => props.onDeleteTask(elem.id)}
              ></i>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Table;
