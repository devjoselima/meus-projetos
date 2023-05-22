import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corBorda};
  padding: 16px;
`;

export const LinkBotao = styled.a`
  color: ${(props) => props.theme.corDeFundo};
  font-size: 14px;
  background-color: ${(props) => props.theme.corDeFundoBotao};
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  margin-top: 24px;
  color: #fff;
`;
