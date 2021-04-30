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
  width: 2vw;
  min-width: 100px;
  justify-content: space-between;
  align-items: center;
`;

export const PostDetailPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60vw;
  max-width: 375px;
  margin: auto;
`;

export const TextFieldStyled = styled(TextField)`
  width: 50vw;
`;

export const ButtonStyled = styled(Button)`
  width: 64px;
  align-self: flex-end;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 20vh;
  justify-content: space-around;
  margin-bottom: 15px;
`;

export const Logomarca = styled.img`
  max-height: 18vh;
  margin-bottom: 16px;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50vw;
  min-width: 350px;
  justify-content: center;
`;

export const VoteIcon = styled.img`
  height: 4vh;
  cursor: pointer;
`;
