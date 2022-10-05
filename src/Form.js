import { Component } from "react";
import "./App.css";
import Table from "./Table";

class Formcl extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      value: "",
      editing: false,
      currentid: "",
      currentValue: "",
    };
  }
  onChange = (e) => {
    this.setState({ value: e.target.value });
  };
  onAddTask = (e) => {
    e.preventDefault();

    const obj = {
      name: this.state.value,
      id: Date.now(),
    };
    if (this.state.value !== "") {
      this.setState({ todos: this.state.todos.concat(obj) });
      this.setState({ value: "" });
    }
  };

  onDeleteTask = (itemId) => {
 
    this.setState({
      todos: [...this.state.todos].filter((id) => id.id !== itemId),
    });
  };

  onEditTodo = (id, newValue) => {
    
    this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.name = newValue;
      }
    });
  };

  onSubmitEditTodo = (e) => {
    e.preventDefault();

    this.onEditTodo(this.state.currentid, this.state.currentValue);
    this.setState({ editing: false });
  };

  onToggleEdit = (todo) => {
  
    this.setState({ editing: true });
    this.setState({ currentid: todo.id });
    this.setState({ currentValue: todo.name });
  };

  onEditInputChange = (e) => {
    this.setState({ currentValue: e.target.value });
  };

  render() {
    // const mylist = this.state.todos.map((todo, i) => (
    //   <li className="todo_item" key={i}>
    //     {todo.name}

    //     <button onClick={() => this.onToggleEdit(todo)}>Edit</button>
    //     <button onClick={() => this.onDeleteTask(todo.id)}>Remove</button>
    //   </li>
    // ));

    return (
      <>
        <div className="main-div">
          <div className="child-div">
            <figure>
              <figcaption>Todo List</figcaption>
            </figure>
            <div className="addItems">
              {this.state.editing === false ? (
                <form onSubmit={this.onAddTask}>
                  <input
                    placeholder="type your task"
                    value={this.state.value}
                    onChange={this.onChange}
                  />
                  <i
                    className="fa fa-plus add-btn"
                    title="Add Item"
                    onClick={this.onAddTask}
                  ></i>
                  {/* <button onClick={this.onAddTask}>Add Item</button> */}
                </form>
              ) : (
                <form onSubmit={this.onSubmitEditTodo}>
                  <input
                    placeholder="edit your task"
                    value={this.state.currentValue}
                    name={this.state.currentValue}
                    onChange={this.onEditInputChange}
                  />
                  <i
                    className="far fa-edit add-btn"
                    title="Update Item"
                    onClick={this.onSubmitEditTodo}
                  ></i>
                  {/* <button onClick={this.onSubmitEditTodo}>Update Item</button> */}
                </form>
              )}
            </div>

            <Table
              todo={this.state.todos}
              onToggleEdit={this.onToggleEdit}
              onDeleteTask={this.onDeleteTask}
              editing={this.state.editing}
              currentid={this.state.currentid}
            />
          </div>

          {/* <ul className="todo_wrapper">{mylist}</ul> */}
        </div>
      </>
    );
  }
}

export default Formcl;
