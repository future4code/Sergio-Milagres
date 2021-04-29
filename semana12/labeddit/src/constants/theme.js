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

  overrides: {
    MuiButton: {
      root: {
        borderRadius: 9999,
        textTransform: 'none'
      }, 
    }, 
  }, 
});

export default theme;
