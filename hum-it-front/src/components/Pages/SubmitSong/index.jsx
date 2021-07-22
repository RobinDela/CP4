import { ReactMediaRecorder } from 'react-media-recorder';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SGuessSong from './style';
//import Button from '../../Ui/Button';

function SubmitSong() {
  const [media, setMedia] = useState(null);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('-------' + media);
    console.log('sent');
  };

  useEffect(() => {
    axios
      .post(`http://localhost:5050/samplesent`, media, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((media) => {
        console.log(media);
      });
  }, [media]);

  return (
    <SGuessSong>
      <div className='mainDiv'>
        <h2>A song stuck in your head? Hum it!</h2>
        <div>
          <ReactMediaRecorder
            audio
            render={({
              status,
              startRecording,
              stopRecording,
              mediaBlobUrl,
            }) => (
              <div>
                <p>{status}</p>
                <audio src={mediaBlobUrl} controls autoPlay />
                <button onClick={startRecording}>Start Recording</button>
                <button
                  onClick={() => {
                    stopRecording();
                    setMedia(mediaBlobUrl);
                  }}
                >
                  Stop Recording
                </button>
                <form onSubmit={handleSubmit}>
                  <input type='hidden' value={mediaBlobUrl} />
                  <input type='submit' value='Send' />
                </form>
              </div>
            )}
          />
        </div>
      </div>
    </SGuessSong>
  );
}

export default SubmitSong;
