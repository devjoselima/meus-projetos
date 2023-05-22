import Avatar from '../../components/Avatar';
import Paragrafo from '../../components/Paragrafo';
import Titulo from '../../components/Titulo';

import { BotaoTema, Descricao, SidebarContainer } from './styles';

type Props = {
  trocaTema: () => void;
};

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Jose Lima</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        devjoselima
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Dev front-end
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
);

export default Sidebar;
