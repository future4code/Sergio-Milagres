import { createMuiTheme } from "@material-ui/core/styles";
import {
  mainPrimaryColor,
  hoverPrimaryColor,
  activePrimaryColor,
  mainSecondaryColor,
} from "./colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      dark: hoverPrimaryColor,
      main: mainPrimaryColor,
      light: activePrimaryColor,
      contrastText: "#fff",
    },
    secondary: {      
      main: mainSecondaryColor,
      contrastText: "#fff",
    },
  },
});

export default theme;
