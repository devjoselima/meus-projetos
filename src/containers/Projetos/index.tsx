import Projeto from '../../components/Projeto';
import Titulo from '../../components/Titulo';

import { Lista } from './styles';

const Projetos = () => (
  <section>
    <Titulo fontSize={16}>Projetos</Titulo>
    <Lista>
      <li>
        <Projeto
          tituloProjeto={'Projeto Lista de tarefas'}
          descProjeto={'Lista de tarefas feita com VueJS'}
          linkProjeto={'https://to-do-vue-pearl.vercel.app'}
        />
      </li>

      <li>
        <Projeto
          tituloProjeto={'Pokedex'}
          descProjeto={'Uma pokedex consumindo uma api de pokemon'}
          linkProjeto={'https://pokemon-search-bice.vercel.app'}
        />
      </li>

      <li>
        <Projeto
          tituloProjeto={'Dictionary App'}
          descProjeto={'Um dicionario consumindo a api Free Dictionary'}
          linkProjeto={'https://dictionary-app-sand.vercel.app'}
        />
      </li>

      <li>
        <Projeto
          tituloProjeto={'Quiz copa do mundo'}
          descProjeto={'Um quiz da copa do mundo feito com js'}
          linkProjeto={'https://quiz-copa.vercel.app'}
        />
      </li>
    </Lista>
  </section>
);

export default Projetos;
