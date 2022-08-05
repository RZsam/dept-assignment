import { ThemeProvider } from '@emotion/react';
import theme from 'theme';
import Home from 'pages/home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
