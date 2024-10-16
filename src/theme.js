import { createTheme } from "@mui/material/styles";
import { blue, green, purple } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
    otherColor: {
      main: blue[500],
    },
  },
});
