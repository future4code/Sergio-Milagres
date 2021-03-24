import React from "react";
import styled from "styled-components";
import axios from "axios";
import { baseUrl, axiosConfig } from "./parameters";

const Main = styled.main`
  display: flex;
  flex-direction: column;

  label {
    margin-top: 16px;
    margin-bottom: 8px;
  }

  input {
    height: 24px;
    border-radius: 8px;
    outline: none;
  }

  button {    
    align-self: center;
    background-color: #ffffff;
    margin: 24px;
    height: 32px;
    width: 96px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    :hover {
      background-color: #2e86cf;
      color: white;
    }
  }
`;

class UserRegistration extends React.Component {
  state = {
    name: "",
    email: "",
  };

  onChangeName = (e) => {
    this.setState({ name: e.target.value });
  };

  onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  createUser = async () => {
    const body = {
      name: this.state.name,
      email: this.state.email,
    };

    try {
      const res = await axios.post(baseUrl, body, axiosConfig);
      console.log(res);
      this.setState({ name: "", email: "" });
      alert("Usuário criado com sucesso!");
    } catch (err) {
      alert("Erro ao criar usuário.");
      console.log(err);
    }
  };

  render() {
    return (
      <Main>
        <h2>Cadastro de usuário</h2>
        <label>Nome de usuário:</label>
        <input
          type="text"
          onChange={this.onChangeName}
          value={this.state.name}
        ></input>
        <label>E-mail:</label>
        <input
          type="email"
          onChange={this.onChangeEmail}
          value={this.state.email}
        ></input>
        <button onClick={this.createUser}>Criar usuário</button>
      </Main>
    );
  }
}

export default UserRegistration;
