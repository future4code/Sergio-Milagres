import React from "react";
import styled from "styled-components";
import axios from "axios";
import { baseUrl, axiosConfig } from "./parameters";

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
      <div>
        <h2>Cadastro de usuário</h2>
        <input
          type="text"
          onChange={this.onChangeName}
          value={this.state.name}
          placeholder="Nome de usuário"
        ></input>
        <input
          type="email"
          onChange={this.onChangeEmail}
          value={this.state.email}
          placeholder="E-mail"
        ></input>
        <button onClick={this.createUser}>Criar usuário</button>
      </div>
    );
  }
}

export default UserRegistration;
