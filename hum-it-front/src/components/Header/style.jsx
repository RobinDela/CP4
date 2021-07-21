import styled from 'styled-components';

const SHeader = styled.div`
  height: 23vh;
  width: 100vw;
  background-color: #2e4159;
  box-shadow: 1px 5px 10px lightcyan;
  font-size: 2rem;
  font-family: fantasy;
  color: White;

  ul {
    display: flex;
    justify-content: space-between;

    list-style-type: none;

    a {
      text-decoration: none;
      font-size: 2rem;
      font-family: fantasy;
      color: cyan;
      background-color: #4f4d8c;
      padding: 1vw;
      border-radius: 12px;
      border: solid 2px black;
    }
    li {
      transition: transform 0.2s;
    }

    li:hover {
      transform: scale(1.05);
    }
  }
`;

export default SHeader;
