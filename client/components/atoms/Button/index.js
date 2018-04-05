import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  padding: 10px 20px;
  color: grey;
`;

export const TomatoButton = Button.extend`
  color: tomato;
  &:hover {
    color: red;
  }
`;
