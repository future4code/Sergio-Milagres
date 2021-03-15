import React from "react";
import styled from "styled-components";

export default class Etapa3 extends React.Component {
  render() {
    return (
      <section>
        <h3>INFORMAÇÕES GERAIS DE ENSINO</h3>
        <div>
          <p>5. Por que você não terminou um curso de graduação?</p>
          <input type="text"></input>
        </div>
        <div>
          <p>6. Você fez algum curso complementar?</p>
          <select>
            <option value="">Selecione um item</option>
            <option value="curso tecnico">Curso Técnico</option>
            <option value="curso de ingles">Curso de Inglês</option>
            <option value="nao fiz curso complementar">
              Não fiz curso complementar
            </option>
          </select>
        </div>
      </section>
    );
  }
}
