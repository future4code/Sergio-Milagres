import React from "react";
import { useHistory } from "react-router-dom";

const CreateTripPage = () => {
  const history = useHistory();

  const criarViagem = () => {
    alert("Viagem Criada!");
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <h1>Criar Viagem</h1>
      <input placeholder="Nome"></input>
      <select></select>
      <input placeholder="Data"></input>
      <textarea placeholder="Descrição"></textarea>
      <input placeholder="Duração em dias" type="number"></input>
      <button onClick={criarViagem}>Criar</button>
      <button onClick={goBack}>Voltar</button>
    </div>
  );
};

export default CreateTripPage;
