import React, { Component } from "react";
import styled from "styled-components"

const ComentarioContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
`;

const InputComentario = styled.input`
  width: 100%;
  margin-right: 5px;
`;

export class SecaoComentario extends Component {
  state = {
    valorInputComentario: "",
  };

  onChangeComentario = (event) => {
	  console.log(event.target.value)
	  this.setState({valorInputComentario: event.target.value})
  }

  render() {
    return (
      <ComentarioContainer>
        <InputComentario
          placeholder={"Comentário"}
          value={this.state.valorInputComentario}
          onChange={this.onChangeComentario}
        />
        <button onClick={this.props.aoEnviar}>Enviar</button>
      </ComentarioContainer>
    );
  }
}
