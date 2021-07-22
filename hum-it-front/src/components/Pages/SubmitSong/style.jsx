import styled from 'styled-components';

const SSubmitSong = styled.div`
  display: flex;
  justify-content: center;
  font-size: 45px;
  font-family: fantasy;
  .mainDiv {
    display: flex;
    justify-content: center;
    width: 800px;
    height: 500px;
    border: solid black 1px;
    border-radius: 15px;
    display: flex;
    margin-top: 30px;
    padding: 30px;
    background-color: #7675a8;
    audio {
      width: 100px;
      height: 100px;
    }
  }
`;

export default SSubmitSong;
