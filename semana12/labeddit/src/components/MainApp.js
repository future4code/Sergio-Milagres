import { useContext } from "react";
import GlobalStateContext from "../globalContext/GlobalStateContext";
import { useHistory } from "react-router-dom";
import { goToPostFeed } from "../routes/coordinator";
import { ButtonsContainer, AppBar } from "../styles/MainAppStyle";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const MainApp = () => {
  const history = useHistory();
  const { labelLog, setLabelLog } = useContext(GlobalStateContext);

  const goToLogin = (history) => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setLabelLog("Login");
    history.push("/");
  };
  return (
    <AppBar>
      <Toolbar>
        <ButtonsContainer>
          <Button
            variant="contained"
            color="primary"
            onClick={() => goToPostFeed(history)}
          >
            Posts Recentes
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => goToLogin(history)}
          >
            {labelLog}
          </Button>
        </ButtonsContainer>
      </Toolbar>
    </AppBar>
  );
};

export default MainApp;
