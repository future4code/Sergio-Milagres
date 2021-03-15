import React from "react";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaOpcoes from "./PerguntaFechada";

export default class Etapa3 extends React.Component {
  render() {
    return (
      <section>
        <h3>INFORMAÇÕES GERAIS DE ENSINO</h3>
        <PerguntaAberta
          pergunta={"Por que você não terminou um curso de graduação?"}
        />
        <PerguntaOpcoes
          pergunta={"Você fez algum curso complementar?"}
          opcoes={[
            "Curso Técnico",
            "Cursos de Inglês",
            "Não fiz curso complementar",
          ]}
        />
      </section>
    );
  }
}
