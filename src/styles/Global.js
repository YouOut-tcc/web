import { createGlobalStyle } from 'styled-components';
import { createTheme } from "@mui/material/styles";

// const GlobalStyle = createGlobalStyle`
//   ${RobotoFont}
//   body {
//     font: 1rem Roboto, sans-serif;
//   }
// `;

const theme = createTheme({
  palette: {
    primary: {
      main: '#8200A8'
    },
  },
});
export default theme