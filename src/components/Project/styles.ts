import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid ${({ theme }) => theme.corBorda};
  padding: 16px;
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 8px;
`;

export const LinkButton = styled.a`
  color: ${({ theme }) => theme.corDeFundo};
  font-size: 14px;
  background-color: ${({ theme }) => theme.corDeFundoBotao};
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  margin-top: 24px;
  color: #fff;
  transition: 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.corPrincipal};
    color: ${({ theme }) => theme.corDeFundo};
  }
`;
