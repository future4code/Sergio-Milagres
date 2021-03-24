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
`;

const Button = styled.button`
  margin: 8px;
  height: 32px;
  width: 160px;
  border: none;
  border-radius: 8px;
  outline: none;
  :hover {
    background-color: #2e86cf;
    color: white;
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
        <div>{this.renderPage()}</div>
        <Button onClick={this.changePage}>{this.state.button}</Button>
      </Main>
    );
  }
}

export default App;
