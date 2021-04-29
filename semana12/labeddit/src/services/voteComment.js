import axios from "axios";
import { BASE_URL } from "../constants/apiConstants";

export const voteComment = (postId, body, commentId, getData) => {
  const token = localStorage.getItem("token");

  axios
    .put(`${BASE_URL}/posts/${postId}/comment/${commentId}/vote`, body, {
      headers: {
        Authorization: token,
      },
    })
    .then(() => {
      getData()
    })
    .catch(() => {
      alert("Erro ao reagir ao comentário!");
    });
};
