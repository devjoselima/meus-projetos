import { P } from './styles';

export type Props = {
  children: string;
  type?: 'dark' | 'light';
  fontSize?: number;
};

const Paragrafo = ({ children, type = 'dark', fontSize }: Props) => (
  <P fontSize={fontSize} type={type}>
    {children}
  </P>
);

export default Paragrafo;
