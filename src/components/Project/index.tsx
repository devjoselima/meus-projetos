import Description from '../Description';
import Title from '../Title';

import { Card, LinkButton, ContainerButtons } from './styles';

interface Props {
  title: string;
  description: string;
  url?: string;
  githubUrl: string;
}

const Projeto = ({ title, description, url, githubUrl }: Props) => (
  <Card>
    <Title>{title}</Title>
    <Description type="light">{description}</Description>
    <ContainerButtons>
      {url && (
        <LinkButton href={url} target="_blank">
          Ver deploy
        </LinkButton>
      )}
      <LinkButton href={githubUrl} target="_blank">
        Ver github
      </LinkButton>
    </ContainerButtons>
  </Card>
);

export default Projeto;
