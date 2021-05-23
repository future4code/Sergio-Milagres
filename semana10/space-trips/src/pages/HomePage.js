import React from "react";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();

  const goToListTripsPage = () => {
    history.push("/trips/list");
  };

  const goToLoginPage = () => {
    history.push("/login");
  };

  return (
    <div>
      <p>Home</p>
      <button onClick={goToListTripsPage}>Ver Viagens</button>
      <button onClick={goToLoginPage}>Painel Administrativo</button>
    </div>
  );
};

export default HomePage;
