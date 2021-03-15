import React from "react";
import styled from "styled-components";

export default class Etapa3 extends React.Component {
  render() {
    return (
      <form>
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <label for="graduacao">
          5. Por que você não terminou um curso de graduação?
        </label>
        <input type="text" id="graduacao" name="graduacao"></input>
        <label for="complementar">6. Você fez algum curso complementar?</label>
        <select id="complementar" name="complementar" required>
          <option value="">Selecione um item</option>
          <option value="curso tecnico">Curso Técnico</option>
          <option value="curso de ingles">Curso de Inglês</option>
          <option value="nao fiz curso complementar">
            Não fiz curso complementar
          </option>
        </select>
        <button>Próxima Etapa</button>
      </form>
    );
  }
}
