import { ThemeProvider } from '@emotion/react';
import theme from './theme';

function App() {
  return <ThemeProvider theme={theme}>dept app</ThemeProvider>;
}

export default App;
