import Projetos from './containers/Projetos';
import Sidebar from './containers/SideBar';
import Sobre from './containers/Sobre';
import { Container } from './styles';
import EstiloGlobal from './styles';

function App() {
  return (
    <div className="App">
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </div>
  );
}

export default App;
