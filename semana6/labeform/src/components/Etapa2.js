import React from "react";
import styled from "styled-components";

export default class Etapa2 extends React.Component {
  render() {
    return (
      <form>
        <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
        <label for="curso">5. Qual curso?</label>
        <input type="text" id="curso" name="curso"></input>
        <label for="unidade">6. Qual a unidade de ensino?</label>
        <input type="text" id="unidade" name="unidade"></input>
        <button>Próxima Etapa</button>
      </form>
    );
  }
}
