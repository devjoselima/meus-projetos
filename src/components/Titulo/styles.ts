import styled from 'styled-components';
import { Props } from '.';

export const Titulo = styled.h3<Props>`
  color: #282a35;
  font-weight: bold;
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  margin-bottom: 16px;
`;
