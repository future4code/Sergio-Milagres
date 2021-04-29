import axios from "axios";
import { BASE_URL } from "../constants/apiConstants";

export const votePost = (postId, body, getData) => {
  const token = localStorage.getItem("token");

  axios
    .put(`${BASE_URL}/posts/${postId}/vote`, body, {
      headers: {
        Authorization: token,
      },
    })
    .then(() => {
      getData();
    })
    .catch(() => {
      alert("Erro ao reagir ao post!");
    });
};
