import logo from './logo.svg';
import './App.css';
import Page from './Page/page'
import { ThemeProvider, createTheme, experimental_sx as sx,} from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      // default: '#121212',
      // paper: '#1d1d1d',
      default: '#424250',
      tab: '#373740',
      paper: '#33333d'
    },
    primary: {
      main: '#ffffff',
      light: '#989898',
      dark: '#000a12'
    },
    secondary: {
      main: '#bb86fc',
      light: '#efb7ff',
      dark: '#8858c8'
    },
    text: {
      primary: '#bb86fc',
      secondary: '#ededed'
    }
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& > fieldset": {
              borderColor: "#ffffff",
            },
          },
        },
      },
    },
  }
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Page />
      </ThemeProvider>
    </div>
  );
}

export default App;
