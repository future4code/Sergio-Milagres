import React from "react";
import styled from "styled-components";

export default class Etapa2 extends React.Component {
  render() {
    return (
      <section>
        <h3>INFORMAÇÕES DO ENSINO SUPERIOR</h3>
        <div>
          <p>5. Qual curso?</p>
          <input type="text"></input>
        </div>
        <div>
          <p>6. Qual a unidade de ensino?</p>
          <input type="text"></input>
        </div>
      </section>
    );
  }
}
