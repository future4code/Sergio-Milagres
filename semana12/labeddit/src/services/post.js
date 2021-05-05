import axios from "axios";
import { BASE_URL } from "../constants/apiConstants";
import { goToPostFeed } from "../routes/coordinator";

export const createPost = (body, history, getData) => {
  const token = localStorage.getItem("token");

  axios
    .post(`${BASE_URL}/posts`, body, {
      headers: {
        Authorization: token,
      },
    })
    .then(() => {
      goToPostFeed(history);
      getData();
    })
    .catch((error) => {
      alert("Erro ao postar!");
    });
};
