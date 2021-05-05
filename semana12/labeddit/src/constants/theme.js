import { createMuiTheme } from "@material-ui/core/styles";
import {
  mainPrimaryColor,
  hoverPrimaryColor,
  activePrimaryColor,
  mainSecondaryColor,
  hoverSecondaryColor,
  activeSecondaryColor,
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
      dark: hoverSecondaryColor,
      main: mainSecondaryColor,
      light: activeSecondaryColor,
      contrastText: "#fff",
    },
  },

  overrides: {
    MuiButton: {
      root: {
        borderRadius: 9999,
        textTransform: "none",
      },
    },

    MuiInputBase: {
      input: {
        backgroundColor: "white",
      },
    },
  },
});

export default theme;
