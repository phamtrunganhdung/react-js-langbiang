import React from "react";
import "../styles/Todo.scss";

class ClearTodo extends React.Component {
  state = {};
  render() {
    return (
      <div className="clearTodo">
        <button className="btn btn-danger">CLEAR ALL</button>
        <button className="btn btn-danger">CLEAR DONE</button>
      </div>
    );
  }
}

export default ClearTodo;
