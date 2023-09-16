import styled from 'styled-components';
import { P } from '../../components/Description/styles';

export const Job = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`;

export const ThemeButton = styled.button`
  border-radius: 12px;
  padding: 8px;
  font-size: 10px;
  font-weight: bold;
  color: ${(props) => props.theme.corDeFundo};
  background-color: ${(props) => props.theme.corPrincipal};
  cursor: pointer;
  border: none;
`;

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`;
