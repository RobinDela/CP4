import styled from 'styled-components';

const SHome = styled.div`
  font-family: fantasy;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 60px;
    margin-top: 30px;
  }
  .introduction {
    display: flex;
    border-radius: 15px;
    border: solid black 1px;

    width: 800px;
    height: 400px;
    font-size: 40px;
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
    word-spacing: 4px;
  }
  .buttons {
    a {
      margin: 50px;
    }
  }
`;

export default SHome;
