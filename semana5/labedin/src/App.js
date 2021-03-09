import React from "react";
import "./App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import CardPequeno from "./components/CardPequeno/CardPequeno";

import perfil from "./img/sergio.jpg";
import logoCorema from "./img/corema.jpg";
import logoUniFoa from "./img/unifoa.png";

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={perfil}
          nome="Sérgio Henrique Nery Figorelle"
          descricao="Oi, eu sou o Sérgio Henrique. Sou estudante de programação na Labenu. Gosto muito de tecnologia, games, música, cultura pop e outras paradas geeks."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />

        <CardPequeno
          icone="📧"
          descricao="Email:"
          info="sergiofigorelle@gmail.com"
        />

        <CardPequeno
          icone="🏠"
          descricao="Endereço:"
          info="Rua Major Luiz Alves, 317 - Boa Sorte - Barra Mansa, RJ"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais e acadêmicas</h2>
        <CardGrande
          imagem={logoCorema}
          nome="Corema Comércio e Recuperação de Metais"
          ano="2016 - atualmente"
          cargo="Auxiliar Administrativo."
          descricao="Emissão de Notas Fiscais e orçamentos, controle de despesas, relatórios de manutenção preventiva, etc."
        />

        <CardGrande
          imagem={logoUniFoa}
          nome="Centro Universitário de Volta Redonda - UniFoa"
          ano="2015 - 2020"
          descricao="Curso de Engenharia de Produção."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
