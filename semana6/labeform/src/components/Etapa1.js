import React from "react";
import styled from "styled-components";

export default class Etapa1 extends React.Component {
  render() {
    return (
      <form>
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <label for="nome">1. Qual o seu nome?</label>
        <input type="text" id="nome" name="nome"></input>
        <label for="idade">2. Qual a sua idade?</label>
        <input type="number" id="idade" name="idade" min="6"></input>
        <label for="email">3. Qual o seu e-mail?</label>
        <input type="text" id="email" name="email"></input>
        <label for="escola">4. Qual a sua escolaridade?</label>
        <select id="escola" name="escola" required>
            <option value="">Selecione um item</option>
            <option value="ensino medio incompleto">Ensino Médio Incompleto</option>
            <option value="ensino medio completo">Ensino Médio Completo</option>
            <option value="ensino superior incompleto">Ensino Superior Incompleto</option>
            <option value="ensino superior completo">Ensino Superior Completo</option>
        </select>
        <button>Próxima Etapa</button>
      </form>
    );
  }
}
