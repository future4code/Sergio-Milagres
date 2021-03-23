import React from "react";
import styled from "styled-components";

const Icone = styled.div`
  display: flex;
`;

const IconeImagem = styled.img`
  margin-right: 5px;
`;

export function IconeComContador(props) {
  return (
    <Icone>
      <IconeImagem alt={"Icone"} src={props.icone} onClick={props.onClickIcone} />
      <p>{props.valorContador}</p>
    </Icone>
  );
}
