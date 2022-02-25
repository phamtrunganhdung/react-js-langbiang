import React from "react";
import "../styles/Todo.scss";

class AddTodo extends React.Component {
  state = {};
  render() {
    return (
      <div className="addTodo">
        <div>
          <input type="text" placeholder="Enter item"></input>
        </div>
        <div>
          <input type="text" placeholder="Enter description"></input>
        </div>
        <div>
          <button className="btn btn-primary">ADD</button>
        </div>
      </div>
    );
  }
}

export default AddTodo;
