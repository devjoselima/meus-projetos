import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Projetos from './containers/Projetos';
import Sidebar from './containers/SideBar';
import Sobre from './containers/Sobre';

import { Container } from './styles';
import EstiloGlobal from './styles';
import temaLight from './themes/light';
import temaDark from './themes/dark';

function App() {
  const [isTemaDark, setIsTemaDark] = useState(true);

  function trocaTema() {
    setIsTemaDark(!isTemaDark);
  }

  return (
    <ThemeProvider theme={isTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
