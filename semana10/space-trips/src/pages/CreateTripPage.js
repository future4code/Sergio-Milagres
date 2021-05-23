import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectedPage";

const CreateTripPage = () => {
  const [name, setName] = useState("");
  const [planet, setPlanet] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");
  const history = useHistory();
  useProtectedPage();

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangePlanet = (e) => {
    setPlanet(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const onChangeDuration = (e) => {
    setDuration(e.target.value);
  };

  const onChangeDate = (e) => {
    setDate(e.target.value);
  };

  const criarViagem = () => {
    setDuration(Number(duration));
    const body = {
      name: name,
      planet: planet,
      date: date,
      description: description,
      durationInDays: duration,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/sergio-milagres-cruz/trips",
        body,
        {
          headers: {
            auth: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        alert("Viagem criada com sucesso!");
        setName("");
        setPlanet("");
        setDate("");
        setDescription("");
        setDuration("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <h1>Criar Viagem</h1>
      <input value={name} onChange={onChangeName} placeholder="Nome"></input>
      <input value={planet} onChange={onChangePlanet} placeholder="Planeta"></input>
      <input value={date} onChange={onChangeDate} placeholder="Data"></input>
      <textarea value={description} onChange={onChangeDescription} placeholder="Descrição"></textarea>
      <input value={duration} onChange={onChangeDuration} placeholder="Duração em dias" type="number"></input>
      <button onClick={criarViagem}>Criar</button>
      <button onClick={goBack}>Voltar</button>
    </div>
  );
};

export default CreateTripPage;
