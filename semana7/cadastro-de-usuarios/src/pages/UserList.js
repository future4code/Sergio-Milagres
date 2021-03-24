import React from "react";
import styled, { ThemeConsumer } from "styled-components";
import axios from "axios";
import { baseUrl, axiosConfig } from "./parameters";

const Main = styled.main`
 width: 400px;
  text-align: center;

  div {
    border-bottom: 2px solid black;
    display: flex;
    justify-content: space-between;

    button {
      align-self: center;
      background-color: #ffffff;
      font-weight: bold;
      color: #c1121f;
      height: 24px;
      width: 24px;
      border: none;
      border-radius: 8px;
      outline: none;
      cursor: pointer;
      :hover {
        background-color: #c1121f;
        color: white;
      }
    }
  }
`;

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
      <Main>
        <h2>Lista de usuários</h2>
        {mapUsers}
      </Main>
    );
  }
}

export default UserList;
