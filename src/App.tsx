import { ThemeProvider } from 'styled-components';
import { theme } from './styles/themes/theme';
import { GlobalStyle } from './styles/global';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
