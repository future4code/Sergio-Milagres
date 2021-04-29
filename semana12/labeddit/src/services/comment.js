import axios from "axios"
import {BASE_URL} from "../constants/apiConstants"
import { goToPostDetail } from "../routes/coordinator"

export const createComment = (postId, body, history) => {
    const token = localStorage.getItem("token")

    axios.post(`${BASE_URL}/posts/${postId}/comment`, body, { 
        headers: {
            Authorization: token
        }
    }).then((response) => {
        console.log(response)
        //goToPostDetail(history)
    }).catch(error => {
        alert("Erro ao criar Post!")
        console.log(error.message)
    })
} 