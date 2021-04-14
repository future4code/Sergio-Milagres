import React from "react";
import { useHistory } from "react-router-dom";

const ListTripsPage = () => {
  const history = useHistory();

  const goToTripDetailsPage = () => {
    history.push("/admin/trips/:id");
  };

  const goToCreateTripPage = () => {
    history.push("/admin/trips/create");
  };

  const logOut = () => {
    history.push("/");
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <h1>Painel Administrativo</h1>
      <button onClick={goToCreateTripPage}>Criar Viagem</button>
      <button onClick={logOut}>Logout</button>
      <button onClick={goBack}>Voltar</button>
      <p>Viagem para Marte</p>
      <p>60 dias</p>
      <button onClick={goToTripDetailsPage}>Ver Detalhes</button>
    </div>
  );
};

export default ListTripsPage;
