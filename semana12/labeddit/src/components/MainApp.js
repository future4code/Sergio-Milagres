import React from "react";
import { useHistory } from "react-router-dom";
import { goToPostFeed, goToLogin } from "../routes/coordinator";
import { ButtonsContainer, AppBar } from "../styles/MainApp";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const MainApp = () => {
  const history = useHistory();

  /* const token = window.localStorage.getItem("token")
    const username = window.localStorage.getItem("username")
    let goToFunction = ""
    let labelButton = ""
    if (token) {
      goToFunction = ""
      labelButton = ""
    } else {
      
    } */

  return (
    <AppBar>
      <Toolbar>
        <ButtonsContainer>
          <Button variant="contained" color="primary" onClick={() => goToPostFeed(history)}>
            Posts Recentes
          </Button>
          <Button variant="contained" color="primary" onClick={() => goToLogin(history)}>
            Logout
          </Button>
        </ButtonsContainer>
      </Toolbar>
    </AppBar>
  );
};

export default MainApp;
