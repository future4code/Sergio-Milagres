import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectedPage";

const CreateTripPage = () => {
  const history = useHistory();
  useProtectedPage();

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
