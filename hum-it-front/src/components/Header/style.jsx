import styled from 'styled-components';

const SHeader = styled.div`
  height: 23vh;
  width: 100%;
  background-color: #2e4159;
  font-size: 2rem;
  font-family: fantasy;
  color: White;
  text-align: center;

  h1 {
    font-size: 80px;
  }

  ul {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    margin-top: 80px;

    a {
      text-decoration: none;
      font-size: 2rem;
      font-family: fantasy;
      color: white;
      background-color: #4f4d8c;
      padding: 1vw;
      border-radius: 12px;
      border: solid 2px black;
      margin-right: 5px;
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
