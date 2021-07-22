import styled from 'styled-components';

const SButton = styled.button`
  background-color: ${({ color, record, stop, submit }) => {
    if (record) return '#2e4159';
    if (stop) return 'red';
    if (submit) return '#4f4d8c';
    if (color) return color;
    return 'red';
  }};
  text-decoration: none;
  font-size: 2rem;
  font-family: fantasy;
  color: white;
  padding: 1vw;
  border-radius: 12px;
  border: solid 2px black;

  transition: transform 0.2s;
    

    :hover {
      opacity: 0.5;

  &:not(:first-of-type) {
    border-left: none;
    margin-left: 50px;
  }
`;

export default SButton;
