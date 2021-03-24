import React from "react";
import styled, { ThemeConsumer } from "styled-components";
import axios from "axios";
import { baseUrl, axiosConfig } from "./parameters";

class UserList extends React.Component {
  state = {
    users: [],
  };

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = async () => {
    try {
      const res = await axios.get(baseUrl, axiosConfig);
      this.setState({ users: res.data });
    } catch (err) {
      alert("Não foi possível exibir a lista de usuários!");
      console.log(err);
    }
  };

  deleteUser = async (id) => {
    try {
      if (window.confirm("Deseja deletar esse usuário?")) {
        const res = await axios.delete(`${baseUrl}/${id}`, axiosConfig);
        this.getAllUsers();
        console.log(res);
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const mapUsers = this.state.users.map((user) => {
      return (
        <div key={user.id}>
          <p>{user.name}</p>
          <button onClick={() => this.deleteUser(user.id)}>X</button>
        </div>
      );
    });
    return (
      <div>
        <h2>Lista de usuários</h2>
        {mapUsers}
      </div>
    );
  }
}

export default UserList;
