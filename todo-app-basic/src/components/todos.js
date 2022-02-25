import React from "react";
import "../styles/Todo.scss";
import AddTodo from "./addTodo";
import ClearTodo from "./clearTodo";
import ListItems from "./listItems";

class Todo extends React.Component {
  state = {};
  render() {
    return (
      <div className="todo">
        <h3>TO-DO LIST</h3>
        <AddTodo />
        <ListItems />
        <ClearTodo />
      </div>
    );
  }
}

export default Todo;
