import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Users extends React.Component {
  state = {
    listUser: [],
  };
  async componentDidMount() {
    let res = await axios.get("https://reqres.in/api/users?page=1");
    this.setState({
      listUser: res.data.data ? res.data.data : [],
    });
  }
  handleViewDetailUser = (user) => {
    this.props.history.push(`/user/${user.id}`);
  };
  handleAddUser = () => {};
  handleEditUser = () => {};
  handleDeleteUser = (id) => {
    axios.delete(`https://reqres.in/api/users/${id}`).then((item) => {
      this.setState({
        listUser: this.state.listUser.filter((user) => user.id !== id),
      });
    });
  };

  render() {
    let { listUser } = this.state;
    return (
      <>
        <div className="listUserContainer">
          <h4 style={{ color: "#1fc2c2" }}>
            use Axios to get users through the API of Reqres
          </h4>
          <table className="table table-hover table-primary">
            <thead>
              <tr>
                <th>Id</th>
                <th>Full Name</th>
                <th>Avatar</th>
                <th>D/E/D</th>
              </tr>
            </thead>
            <tbody>
              {listUser.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td onClick={() => this.handleViewDetailUser(item)}>
                      {item.first_name} {item.last_name}
                    </td>
                    <td>
                      <img src={item.avatar} alt="new" />
                    </td>
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={() => this.handleViewDetailUser(item)}
                      >
                        Details
                      </button>
                      <button
                        className="btn btn-warning"
                        onClick={() => this.handleAddUser()}
                      >
                        Add
                      </button>
                      <button
                        className="btn btn-primary"
                        onClick={() => this.handleEditUser()}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => this.handleDeleteUser(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default withRouter(Users);
