import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      history.push("/admin/trips/list");
    }
  }, [history]);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const login = () => {
    const body = {
      email: email,
      password: password,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/sergio-milagres-cruz/login",
        body
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        history.push("/admin/trips/list");
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
      <h1>Login</h1>
      <input value={email} onChange={onChangeEmail} placeholder="Email"></input>
      <input
        value={password}
        type="password"
        onChange={onChangePassword}
        placeholder="Senha"
      ></input>
      <button onClick={login}>Entrar</button>
      <button onClick={goBack}>Voltar</button>
    </div>
  );
};

export default LoginPage;
