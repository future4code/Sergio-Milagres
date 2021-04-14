import React from "react";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const history = useHistory();

  const goToListTripsPage = () => {
    history.push("/admin/trips/list");
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <h1>Login</h1>
      <input placeholder="Email"></input>
      <input placeholder="Senha"></input>
      <button onClick={goToListTripsPage}>Entrar
      </button>
      <button onClick={goBack}>Voltar
      </button>
    </div>
  );
};

export default LoginPage