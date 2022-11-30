import styled from 'styled-components';

export const Title = styled.h3`
  margin-bottom: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.m};
`;

export const Input = styled.input`
  margin-bottom: ${p => p.theme.space[3]}px;
  width: 100%;
`;
