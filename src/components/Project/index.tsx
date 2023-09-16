import Description from '../Description';
import Title from '../Title';

import { Card, LinkButton } from './styles';

type Props = {
  title: string;
  description: string;
  url: string;
};

const Projeto = ({ title, description, url }: Props) => (
  <Card>
    <Title>{title}</Title>
    <Description type="light">{description}</Description>
    <LinkButton href={url} target="_blank">
      Visualizar
    </LinkButton>
  </Card>
);

export default Projeto;
