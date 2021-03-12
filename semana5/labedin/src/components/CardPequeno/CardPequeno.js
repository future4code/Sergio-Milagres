import React from "react";
import "./CardPequeno.css";

function CardPequeno(props) {
  return (
    <div className="littlecard-container">
      <section>
        <h1>{ props.icone }</h1>
        <h4>{ props.descricao }</h4>
        <p>{ props.info }</p>
      </section>
    </div>
  );
}

export default CardPequeno;
