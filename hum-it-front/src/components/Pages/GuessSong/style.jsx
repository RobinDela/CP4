import styled from 'styled-components';

const SGuessSong = styled.div`
  display: flex;
  justify-content: center;
  font-size: 45px;
  font-family: fantasy;

  .mainDiv {
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
    flex-direction: column;

    width: 800px;
    height: 500px;
    border: solid black 1px;
    border-radius: 15px;
    display: flex;
    margin-top: 30px;
    padding: 30px;
    background-color: #7675a8;
    .audioDiv {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      .field {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;

export default SGuessSong;
