import { useEffect, useState } from 'react';
import axios from 'axios';
import SGuessSong from './style';
import Button from '../../Ui/Button';

function GuessSong() {
  const [audio, setAudio] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5050/samples`).then(({ data }) => {
      setAudio(data);
    });
    console.log(audio);
  }, [audio]);

  // Axios.post (Artist + title connected with button send, value = input form)

  return (
    <SGuessSong>
      <div className='mainDiv'>
        <h2>Guess the song!</h2>
        <div className='audioDiv'>
          <audio src={audio} controls autoPlay />
          <div className='field'>
            <input type='text' placeholder="What's this song?"></input>
            <input type='text' placeholder='Who is the artist/band?'></input>
            <Button submit>Send</Button>
          </div>
        </div>
      </div>
    </SGuessSong>
  );
}

export default GuessSong;
