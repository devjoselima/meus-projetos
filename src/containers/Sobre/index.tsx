import Titulo from '../../components/Titulo';
import Paragrafo from '../../components/Paragrafo';
import { GithubSecao } from './styles';

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati iste
      inventore laborum eaque mollitia numquam odit, repudiandae deserunt,
      sapiente id commodi aliquid, ab similique cumque doloremque? Fuga
      repellendus rerum nisi?
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=devjoselima&count_private=true&show_icons=true&theme=tokyonight" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=devjoselima&layout=compact&theme=tokyonight" />
    </GithubSecao>
  </section>
);

export default Sobre;
