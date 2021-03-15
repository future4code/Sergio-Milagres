import React from "react";
import styled from "styled-components";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";

const Form = styled.main`
  text-align: center;
`;

const Proximo = styled.button`
  margin: 24px;
`;

export default class App extends React.Component {
  state = {
    etapa: 1,
  };

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
    }
  };

  irParaProximaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1 });
  };

  render() {
    return (
      <Form>
        {this.renderizaEtapa()}
        {this.state.etapa < 4 ? (
          <Proximo onClick={this.irParaProximaEtapa}>Próxima Etapa</Proximo>
        ) : (
          <Final />
        )}
      </Form>
    );
  }
}
