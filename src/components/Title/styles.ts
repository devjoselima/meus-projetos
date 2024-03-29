import styled from 'styled-components';
import { Props } from '.';

export const Title = styled.h3<Props>`
  color: ${(props) => props.theme.corPrincipal};
  font-weight: bold;
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  margin-bottom: 16px;
`;
