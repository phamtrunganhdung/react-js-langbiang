import React from "react";
import "../styles/Todo.scss";

class AddTodo extends React.Component {
  state = {
    title: "",
    description: "",
  };

  handleOnChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleOnChangeDescription = (event) => {
    this.setState({
      description: event.target.value,
    });
  };
  handleAddTodo = () => {
    let todo = {
      id: "todo" + Math.floor(Math.random() * 1000),
      title: this.state.title,
      description: this.state.description,
    };
    this.props.addNewTodo(todo);
    this.setState({
      title: "",
      description: "",
    });
  };
  render() {
    let { title, description } = this.state;
    return (
      <div className="addTodo">
        <div>
          <input
            type="text"
            placeholder="Enter item"
            value={title}
            onChange={(event) => this.handleOnChangeTitle(event)}
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter description"
            value={description}
            onChange={(event) => this.handleOnChangeDescription(event)}
          ></input>
        </div>
        <div>
          <button
            className="btn btn-primary"
            onClick={() => this.handleAddTodo()}
          >
            ADD
          </button>
        </div>
      </div>
    );
  }
}

export default AddTodo;
