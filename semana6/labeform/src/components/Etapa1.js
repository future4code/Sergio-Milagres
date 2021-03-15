import React from "react";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaFechada from "./PerguntaFechada";

export default class Etapa1 extends React.Component {
  state = {
    opcoes: [
      "Ensino Médio Incompleto",
      "Ensino Médio Completo",
      "Ensino Superior Incompleto",
      "Ensino Superior Completo",
    ],
  };

  render() {
    return (
      <section>
        <h3>DADOS GERAIS</h3>
        <PerguntaAberta pergunta={"Qual o seu nome?"} />
        <PerguntaAberta pergunta={"Qual a sua idade?"} />
        <PerguntaAberta pergunta={"Qual o seu e-mail?"} />
        <PerguntaFechada
          pergunta={"Qual a sua escolaridade?"}
          opcoes={this.state.opcoes}
        />
      </section>
    );
  }
}
