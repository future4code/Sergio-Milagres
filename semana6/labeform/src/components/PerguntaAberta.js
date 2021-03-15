import React from "react";

export default class PerguntaAberta extends React.Component {
  render() {
    return (
      <div>
        <p>▸ {this.props.pergunta}</p>
        <input></input>
      </div>
    );
  }
}
