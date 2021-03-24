import React from "react";
import styled from "styled-components";
import UserRegistration from "./pages/UserRegistration";
import UserList from "./pages/UserList";

const Main = styled.main`
  height: 100vh;
  width: 100vw;
  background-color: lightsteelblue;
  margin: 0px;
  padding: 0px;
  display: grid;
  grid-template-rows: 1fr 75% 10%;
  justify-items: center;

  h1 {
    color: #21217b;
  }

  section {
    margin: 16px;
  }

  button {
    background-color: #ffffff;
    margin: 8px;
    height: 32px;
    width: 160px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    :hover {
      background-color: #21217b;
      color: white;
    }
  }
`;

class App extends React.Component {
  state = {
    userRegisterPage: true,
    button: "Ir para lista de usuários",
  };

  changePage = () => {
    this.state.userRegisterPage
      ? this.setState({ userRegisterPage: false, button: "Voltar" })
      : this.setState({
          userRegisterPage: true,
          button: "Ir para lista de usuários",
        });
  };

  renderPage = () => {
    if (this.state.userRegisterPage) {
      return <UserRegistration />;
    } else {
      return <UserList />;
    }
  };

  render() {
    return (
      <Main>
        <h1>Labenusers</h1>
        <section>{this.renderPage()}</section>
        <button onClick={this.changePage}>{this.state.button}</button>
      </Main>
    );
  }
}

export default App;
