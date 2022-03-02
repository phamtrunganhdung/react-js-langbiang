import React from "react";
import "../styles/Todo.scss";
import AddTodo from "./addTodo";

class ListItems extends React.Component {
  state = {
    listTodo: [
      {
        id: "todo1",
        title: "Read React book",
        description: "read chapter 3.5",
        checked: false,
        showDescription: false,
      },
      {
        id: "todo2",
        title: "Play football",
        description: "play from 4 to 5 pm",
        checked: false,
        showDescription: false,
      },
      {
        id: "todo3",
        title: "Watching movie",
        description: "movie 1",
        checked: false,
        showDescription: false,
      },
    ],
    editTodo: {},
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
  handleEditTodo = (todo) => {
    let { listTodo, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    if (isEmptyObj === false && editTodo.id === todo.id) {
      let listTodoCopy = [...listTodo];

      let objIndex = listTodoCopy.findIndex((item) => item.id === todo.id);

      listTodoCopy[objIndex].title = editTodo.title;
      listTodoCopy[objIndex].description = editTodo.description;
      this.setState({
        listTodo: listTodoCopy,
        editTodo: {},
      });
      document.getElementById("info" + todo.id).style.display = "block";
      return;
    }
    document.getElementById("info" + todo.id).style.display = "none";
    this.setState({
      editTodo: todo,
    });
  };
  handleOnchangeEditTodoTitle = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };
  handleOnchangeEditTodoDescription = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.description = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };
  render() {
    let { listTodo, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    return (
      <div className="listItems">
        <h3>TO-DO LIST</h3>
        <AddTodo addNewTodo={this.addNewTodo} />
        <h5>List Items</h5>
        {listTodo.map((item, index) => {
          return (
            <div className="items" key={item.id}>
              <input type="checkbox" onChange={() => this.handleCheck(item)} />
              {isEmptyObj === true ? (
                <span>
                  <input
                    className="todoTitle"
                    id={"tit" + item.id}
                    type="text"
                    value={item.title}
                    disabled
                  />
                </span>
              ) : (
                <>
                  {editTodo.id === item.id ? (
                    <span>
                      <input
                        className="editTodoTitle"
                        id={"editTit" + item.id}
                        type="text"
                        value={editTodo.title}
                        onChange={(event) =>
                          this.handleOnchangeEditTodoTitle(event)
                        }
                      />
                    </span>
                  ) : (
                    <span>
                      <input
                        className="todoTitle"
                        id={"tit" + item.id}
                        type="text"
                        value={item.title}
                        disabled
                      />
                    </span>
                  )}
                </>
              )}
              <button className="btn" onClick={() => this.handleEditTodo(item)}>
                {isEmptyObj === false && editTodo.id === item.id ? (
                  <i className="fa fa-save"></i>
                ) : (
                  <i className="fa fa-pencil"></i>
                )}
              </button>
              <button
                className="btn"
                onClick={() => this.handleShowDescription(item)}
              >
                <i className="fa fa-info-circle" id={"info" + item.id}></i>
              </button>
              {isEmptyObj === true ? (
                <span>
                  <input
                    className="todoDescription"
                    id={"des" + item.id}
                    type="text"
                    value={item.description}
                    disabled
                  />
                </span>
              ) : (
                <>
                  {editTodo.id === item.id ? (
                    <span>
                      <input
                        className="editTodoDescription"
                        id={"editDes" + item.id}
                        type="text"
                        value={editTodo.description}
                        onChange={(event) =>
                          this.handleOnchangeEditTodoDescription(event)
                        }
                      />
                    </span>
                  ) : (
                    <span>
                      <input
                        className="todoDescription"
                        id={"des" + item.id}
                        type="text"
                        value={item.description}
                        disabled
                      />
                    </span>
                  )}
                </>
              )}
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
      </div>
    );
  }
}

export default ListItems;
