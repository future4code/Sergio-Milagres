import React from "react";
import styled from "styled-components";

export default class Etapa1 extends React.Component {
  render() {
    return (
      <section>
        <h3>DADOS GERAIS</h3>
        <div>
          <p>1. Qual o seu nome?</p>
          <input type="text"></input>
        </div>
        <div>
          <p>2. Qual a sua idade?</p>
          <input type="number" min="6"></input>
        </div>
        <div>
          <p>3. Qual o seu e-mail?</p>
          <input type="text"></input>
        </div>
        <div>
          <p>4. Qual a sua escolaridade?</p>
          <select required>
            <option value="">Selecione um item</option>
            <option value="ensino medio incompleto">
              Ensino Médio Incompleto
            </option>
            <option value="ensino medio completo">Ensino Médio Completo</option>
            <option value="ensino superior incompleto">
              Ensino Superior Incompleto
            </option>
            <option value="ensino superior completo">
              Ensino Superior Completo
            </option>
          </select>
        </div>
      </section>
    );
  }
}
