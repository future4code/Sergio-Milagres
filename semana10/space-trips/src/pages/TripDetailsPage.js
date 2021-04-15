import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectedPage";

const TripDetailsPage = () => {
  const [trip, setTrip] = useState({});
  const [reload, setReload] = useState(false);
  const history = useHistory();
  const pathParams = useParams();
  const tripId = pathParams.id;

  useProtectedPage();

  useEffect(() => {
    getTripDetail();
  }, [reload]);

  const getTripDetail = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/sergio-milagres-cruz/trip/${tripId}`,
        {
          headers: {
            auth: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        setTrip(res.data.trip);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const aproveCandidate = (candidateId) => {
    const body = {
      approve: true,
    };

    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/sergio-milagres-cruz/trips/${tripId}/candidates/${candidateId}/decide`,
        body,
        {
          headers: {
            auth: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        alert("Candidato Aprovado!");
        setReload(!reload);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const denyCandidate = (candidateId) => {
    const body = {
      approve: false,
    };

    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/sergio-milagres-cruz/trips/${tripId}/candidates/${candidateId}/decide`,
        body,
        {
          headers: {
            auth: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        alert("Candidato Rejeitado!");
        setReload(!reload);
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
      <h1>Pagina de Detalhes da Viagem</h1>
      <button onClick={goBack}>Voltar</button>
      <p>Nome: {trip.name}</p>
      <p>Descrição: {trip.description}</p>
      <p>Planeta: {trip.planet}</p>
      <p>Duração: {trip.durationInDays} dias</p>
      <p>Data: {trip.date}</p>
      <h2>Candidatos Pendentes</h2>
      {trip.candidates &&
        trip.candidates.map((candidate) => {
          return (
            <div>
              <p>Nome: {candidate.name}</p>
              <p>Idade: {candidate.age}</p>
              <p>Profissão: {candidate.profession}</p>
              <p>País: {candidate.country}</p>
              <p>Texto de candidatura:</p>
              <p>{candidate.applicationText}</p>
              <button onClick={() => aproveCandidate(candidate.id)}>
                Aprovar
              </button>
              <button onClick={() => denyCandidate(candidate.id)}>
                Reprovar
              </button>
            </div>
          );
        })}
    </div>
  );
};
export default TripDetailsPage;
