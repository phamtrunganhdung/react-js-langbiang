import React from "react";
import "../styles/Todo.scss";

class ListItems extends React.Component {
  state = {
    listTodo: [
      {
        id: "todo1",
        title: "Read React book",
        description: "spend 2 hours reading book every day",
        showDescription: false,
      },
      {
        id: "todo2",
        title: "Play football",
        description: "play from 4-5 pm",
        showDescription: false,
      },
      {
        id: "todo3",
        title: "Do homework",
        description: "finish homework",
        showDescription: false,
      },
    ],
  };

  handleShowDescription = (item) => {
    console.log(item);
  };
  render() {
    let { listTodo } = this.state;
    return (
      <div className="listItems">
        <h5>List Items</h5>
        {listTodo.map((item, index) => {
          return (
            <div className="items" key={item.id}>
              <input type="checkbox" />
              <input
                className="todoTitle"
                id={"title" + item.id}
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
      </div>
    );
  }
}

export default ListItems;
