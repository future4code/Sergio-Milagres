import React from "react";
import PerguntaAberta from "./PerguntaAberta";

export default class Etapa2 extends React.Component {
  render() {
    return (
      <section>
        <h3>INFORMAÇÕES DO ENSINO SUPERIOR</h3>
        <PerguntaAberta pergunta={"Qual curso de graduação?"} />
        <PerguntaAberta pergunta={"Qual a instituição de ensino?"} />
      </section>
    );
  }
}
