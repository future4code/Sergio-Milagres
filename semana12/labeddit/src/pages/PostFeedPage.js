import React from "react";
import { useForm } from "../hooks/useForm";
import { createPost } from "../services/post";
import logo from "../assets/logo_labeddit.png";
import { useProtectPage } from "../hooks/useProtectPage";
import { BASE_URL } from "../constants/apiConstants";
import { useRequestData } from "../hooks/useRequestData";
import PostCard from "../components/PostCard";
import {
  TextFieldStyled,
  ButtonStyled,
  FormContainer,
  PostFeedPageContainer,
  Logomarca,
  LogoContainer,
} from "../styles/PostFeedPageStyle";
import { useHistory } from "react-router-dom";

const PostFeedPage = () => {
  const history = useHistory();

  useProtectPage();

  const { form, onChange, resetForm } = useForm({ text: "", title: "" });

  const { data, getData } = useRequestData(`${BASE_URL}/posts`, []);

  const posts = data.posts;

  const orderPosts =
    posts && posts.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    onChange(value, name);
  };

  const handleSubmission = (event) => {
    event.preventDefault();
    createPost(form, history, getData);
    resetForm();
  };

  return (
    <PostFeedPageContainer>
      <LogoContainer>
        <Logomarca src={logo} />
      </LogoContainer>
      <FormContainer onSubmit={handleSubmission}>
        <TextFieldStyled
          label="Título"
          variant="outlined"
          required
          name="title"
          value={form.title}
          onChange={handleInputChange}
        />
        <TextFieldStyled
          label="O que você está pensando?"
          variant="outlined"
          required
          name="text"
          value={form.text}
          onChange={handleInputChange}
        />
        <ButtonStyled variant="contained" color="primary" type="submit">
          Postar
        </ButtonStyled>
      </FormContainer>
      {posts &&
        orderPosts.map((post) => {
          return (
            <PostCard
              key={post.id}
              id={post.id}
              text={post.text}
              username={post.username}
              commentsCount={post.commentsCount}
              votesCount={post.votesCount}
              title={post.title}
              getData={getData}
            />
          );
        })}
    </PostFeedPageContainer>
  );
};

export default PostFeedPage;
