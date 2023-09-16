import Titulo from '../../components/Title';
import Description from '../../components/Description';
import { GithubSecao } from './styles';

const Sobre = () => {
  return (
    <section>
      <Titulo fontSize={16}>Sobre</Titulo>
      <Description>
        Olá! meu nome é José Lima, tenho 19 anos e desejo me tornar um
        desenvolvedor full stack!
      </Description>
      <GithubSecao>
        <img src="https://github-readme-stats.vercel.app/api?username=devjoselima&count_private=true&show_icons=true&theme=tokyonight" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=devjoselima&layout=compact&theme=tokyonight" />
      </GithubSecao>
    </section>
  );
};

export default Sobre;
