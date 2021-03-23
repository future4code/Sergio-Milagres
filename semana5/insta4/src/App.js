import React from "react";
import Post from "./components/Post/Post";
import styled from "styled-components";

const arrayDePosts = [
  {
    nomeUsuario: "paulinha",
    fotoUsuario: "https://picsum.photos/50/50",
    fotoPost: "https://picsum.photos/200/150",
  },
  {
    nomeUsuario: "jorge",
    fotoUsuario: "https://picsum.photos/50/52",
    fotoPost: "https://picsum.photos/200/152",
  },
  {
    nomeUsuario: "sergioh",
    fotoUsuario: "https://picsum.photos/50/54",
    fotoPost: "https://picsum.photos/200/154",
  },
];

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Formulario = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 180px;
  width: 240px;
  border: 1px solid gray;
  margin: 20px;
  padding: 30px;
`;

class App extends React.Component {
  state = {
    posts: arrayDePosts,
    nomeUsuario: "",
    fotoUsuario: "",
    fotoPost: "",
  };

  novoNomeUsuario = (event) => {
    this.setState({ nomeUsuario: event.target.value });
  };

  novaFotoUsuario = (event) => {
    this.setState({ fotoUsuario: event.target.value });
  };

  novaFotoPost = (event) => {
    this.setState({ fotoPost: event.target.value });
  };

  adicionarNovoPost = () => {
    const novoPost = {
      nomeUsuario: this.state.nomeUsuario,
      fotoUsuario: this.state.fotoUsuario,
      fotoPost: this.state.fotoPost,
    };

    this.setState({
      posts: [...this.state.posts, novoPost],
      nomeUsuario: "",
      fotoUsuario: "",
      fotoPost: "",
    });
  };

  render() {
    const componentsPost = this.state.posts.map((post) => {
      return (
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      );
    });

    return (
      <AppContainer>
        <Formulario>
          <label for="usuario">Nome do Usuário:</label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            value={this.state.nomeUsuario}
            onChange={this.novoNomeUsuario}
          />
          <label for="perfil">Foto de Perfil:</label>
          <input
            type="url"
            id="perfil"
            name="perfil"
            placeholder="Cole o link aqui"
            value={this.state.fotoUsuario}
            onChange={this.novaFotoUsuario}
          />
          <label for="post">Foto do Post:</label>
          <input
            type="url"
            id="post"
            name="post"
            placeholder="Cole o link aqui"
            value={this.state.fotoPost}
            onChange={this.novaFotoPost}
          />
          <hr/>
          <button onClick={this.adicionarNovoPost}>Enviar novo post</button>
        </Formulario>
        {componentsPost}
      </AppContainer>
    );
  }
}

export default App;
