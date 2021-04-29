import React from "react";
import Router from "./routes/Router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./constants/theme";
import MainApp from "./components/MainApp";

const Container = styled.div`
  padding-top: 64px;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MainApp />
        <Container>
          <Router />
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
