import React from "react";
import "../styles/Todo.scss";
import AddTodo from "./addTodo";
import EditTodo from "./editTodo";

class ListItems extends React.Component {
  state = {
    listTodo: [
      {
        id: "todo1",
        title: "Read React book",
        description: "spend 2 hours reading book every day",
        checked: false,
        showDescription: false,
      },
      {
        id: "todo2",
        title: "Play football",
        description: "play from 4-5 pm",
        checked: false,
        showDescription: false,
      },
      {
        id: "todo3",
        title: "Do homework",
        description: "finish homework",
        checked: false,
        showDescription: false,
      },
    ],
  };

  handleShowDescription = (item) => {
    let showDes = document.getElementById("des" + item.id);
    item.showDescription = !item.showDescription;
    item.showDescription === false
      ? (showDes.style.display = "none")
      : (showDes.style.display = "block");
  };
  handleCheck = (item) => {
    let checkTit = document.getElementById("tit" + item.id);
    let checkDes = document.getElementById("des" + item.id);
    item.checked = !item.checked;
    item.checked === false
      ? (checkTit.style.textDecoration = "none") &&
        (checkDes.style.textDecoration = "none")
      : (checkTit.style.textDecoration = "line-through") &&
        (checkDes.style.textDecoration = "line-through");
  };
  addNewTodo = (todo) => {
    this.setState({
      listTodo: [...this.state.listTodo, todo],
    });
  };
  handleClearDoneTodo = () => {
    let currentTodo = this.state.listTodo;
    this.setState({
      listTodo: currentTodo.filter((item) => item.checked === false),
    });
  };
  handleClearAllTodo = () => {
    let currentTodo = this.state.listTodo;
    this.setState({
      listTodo: currentTodo.filter((item) => item.id === ""),
    });
  };
  render() {
    let { listTodo } = this.state;
    return (
      <div className="listItems">
        <h3>TO-DO LIST</h3>
        <AddTodo addNewTodo={this.addNewTodo} />
        <h5>List Items</h5>
        {listTodo.map((item, index) => {
          return (
            <div className="items" key={item.id}>
              <input type="checkbox" onChange={() => this.handleCheck(item)} />
              <input
                className="todoTitle"
                id={"tit" + item.id}
                type="text"
                value={item.title}
                disabled
              />
              <button className="btn">
                <i className="fa fa-pencil"></i>
              </button>
              <button
                className="btn"
                onClick={() => this.handleShowDescription(item)}
              >
                <i className="fa fa-info-circle"></i>
              </button>
              <input
                className="todoDescription"
                id={"des" + item.id}
                type="text"
                value={item.description}
                disabled
              />
            </div>
          );
        })}

        <div className="clearTodo">
          <button
            className="btn btn-danger"
            onClick={() => this.handleClearAllTodo()}
          >
            CLEAR ALL
          </button>
          <button
            className="btn btn-danger"
            onClick={() => this.handleClearDoneTodo()}
          >
            CLEAR DONE
          </button>
        </div>
        <EditTodo />
      </div>
    );
  }
}

export default ListItems;
