import styled from "styled-components";
import {
  TextField,
  Button,
  Card,
  CardActions,
  CardMedia,
} from "@material-ui/core";

export const CardStyled = styled(Card)`
  width: 50vw;
  min-width: 300px;
  margin: 10px;
  height: 100vh;
`;

export const CardMediaStyled = styled(CardMedia)`
  height: 240px;
`;

export const CardActionsStyled = styled(CardActions)`
  display: flex;
  justify-content: space-between;
`;

export const CountVoteContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 3vw;
  min-width: 150px;
  justify-content: space-between;
  align-items: center;
`;

export const PostDetailPageContainer = styled.div`
  width: 60vw;
  max-width: 375px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;
  padding-top: 15px;
`;

export const TextFieldStyled = styled(TextField)`
  width: 50vw;
  min-width: 300px;
`;

export const ButtonStyled = styled(Button)`
  width: 50vw;
  min-width: 300px;
  margin-top: 5px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 52vh;
  justify-content: space-around;
  margin-bottom: 15px;
`;

export const Logomarca = styled.img`
  max-height: 18vh;
  margin: 0 auto;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50vw;
  min-width: 350px;
  justify-content: center;
  margin-top: 15px;
`;

export const VoteIcon = styled.img`
  height: 4vh;
  cursor: pointer;
`;
