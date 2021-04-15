import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectedPage";

const TripDetailsPage = () => {
  const [trip, setTrip] = useState({});
  const history = useHistory();
  const pathParams = useParams();
  const id = pathParams.id;

  useProtectedPage();

  useEffect(() => {
    getTripDetail();
  }, []);

  const getTripDetail = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/sergio-milagres-cruz/trip/${id}`,
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

  const goBack = () => {
    history.goBack();
  };
  
  return (
    <div>
      <p>Pagina de Detalhes da Viagem</p>
      <button onClick={goBack}>Voltar</button>
      <h1>{trip.planet}</h1>
      <h2>{trip.name}</h2>
      <p>Data: {trip.date}</p>
      <p>Duração: {trip.durationInDays} dias</p>
      <p>Descrição: {trip.description}</p>
      <p>Candidaturas</p>
      <button>Aprovar</button>
      <button>Rejeitar</button>
    </div>
  );
};
export default TripDetailsPage;
