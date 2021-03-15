import React from "react";

export default class PerguntaOpcoes extends React.Component {
  render() {
    return (
      <div>
        <p>▸ {this.props.pergunta}</p>
        <select>
          <option value="">Selecione um Item</option>
          {this.props.opcoes.map((opcao) => (
            <option value={opcao}>{opcao}</option>
          ))}
        </select>
      </div>
    );
  }
}
