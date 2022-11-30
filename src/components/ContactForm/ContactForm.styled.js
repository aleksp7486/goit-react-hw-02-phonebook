import styled from 'styled-components';

export const Form = styled.form``;

export const Label = styled.label`
  display: flex;
  gap: 10px;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Input = styled.input`
  margin-left: auto;
  width: 100%;
  max-width: 75%;
`;

export const Btn = styled.button`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  /* height: 22px; */
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.white};
  font-weight: 700;
  background-color: ${p => p.theme.colors.primary};
  border: 0;
  border-radius: ${p => p.theme.radii.normal};
  cursor: pointer;
  transition: background-color 200ms ease-in;
  span {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-right: ${p => p.theme.space[2]}px;
  }
  :hover {
    background-color: ${p => p.theme.colors.accent};
  }
`;
