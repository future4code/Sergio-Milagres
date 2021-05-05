import axios from "axios";
import { BASE_URL } from "../constants/apiConstants";

export const createComment = (postId, body, getData) => {
  const token = localStorage.getItem("token");

  axios
    .post(`${BASE_URL}/posts/${postId}/comment`, body, {
      headers: {
        Authorization: token,
      },
    })
    .then(() => {
      getData();
    })
    .catch(() => {
      alert("Erro ao comentar!");
    });
};
