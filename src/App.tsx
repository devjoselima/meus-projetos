import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Projects from './containers/Projects';
import Sidebar from './containers/SideBar';
import About from './containers/About';

import { Container } from './styles';
import GlobalStyles from './styles';
import lightTheme from './themes/light';
import darkTheme from './themes/dark';

function App() {
  const [isThemeDark, setIsThemeDark] = useState(true);

  function handleChangeTheme() {
    setIsThemeDark(!isThemeDark);
  }

  return (
    <ThemeProvider theme={isThemeDark ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Container>
        <Sidebar handleChangeTheme={handleChangeTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
