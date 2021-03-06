import axios from "axios";
import { BASE_URL } from "../constants/apiConstants";
import { goToPostFeed } from "../routes/coordinator";

export const login = (body, history) => {
  axios
    .post(`${BASE_URL}/login`, body)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", response.data.user.username);
      goToPostFeed(history);
    })
    .catch(() => {
      alert("Email ou senha inválidos!");
    });
};

export const signup = (body, history) => {
  axios
    .post(`${BASE_URL}/signup`, body)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", response.data.user.username);
      goToPostFeed(history);
    })
    .catch(() => {
      alert("Erro ao cadastar usuário!");
    });
};
