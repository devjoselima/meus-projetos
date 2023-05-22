import Paragrafo from '../Paragrafo';
import Titulo from '../Titulo';

import { Card, LinkBotao } from './styles';

type Props = {
  tituloProjeto: string;
  descProjeto: string;
  linkProjeto: string;
};

const Projeto = ({ tituloProjeto, descProjeto, linkProjeto }: Props) => (
  <Card>
    <Titulo>{tituloProjeto}</Titulo>
    <Paragrafo tipo="secundario">{descProjeto}</Paragrafo>
    <LinkBotao href={linkProjeto} target="_blank">
      Visualizar
    </LinkBotao>
  </Card>
);

export default Projeto;
