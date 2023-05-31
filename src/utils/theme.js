import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000'
    },
    secondary: {
      main: red[500]
    },
    background: {
      default: '#000000',
      paper: '#212121'
    },
    text: {
      primary: '#ffffff',
      secondary: '#bdbdbd'
    }
  }
});

export default theme;
