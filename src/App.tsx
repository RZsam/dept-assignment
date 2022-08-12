import { ThemeProvider } from '@emotion/react';
import theme from 'theme';
import Home from 'pages/home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: false,
      refetchIntervalInBackground: false,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
