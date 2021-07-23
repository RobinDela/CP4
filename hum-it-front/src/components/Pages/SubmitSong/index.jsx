import { ReactMediaRecorder } from 'react-media-recorder';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SGuessSong from './style';
//import Button from '../../Ui/Button';

function SubmitSong() {
  const [media, setMedia] = useState(null);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const formData = new FormData();
    formData.append('sample', media.raw);

    axios
      .post(`http://localhost:5050/samplesent`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((media) => {
        console.log(media);
      });
  };

  // useEffect(() => {
  //   axios
  //     .post(`http://localhost:5050/samples`, media, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     })
  //     .then((media) => {
  //       console.log(media);
  //     });
  // }, [media]);

  return (
    <SGuessSong>
      <div className='mainDiv'>
        <div>
          <h2>A song stuck in your head? Hum it!</h2>
        </div>

        <ReactMediaRecorder
          audio
          render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
            <div className='audiobuttons'>
              <p>{status}</p>

              <audio src={mediaBlobUrl} controls autoPlay />

              <button onClick={startRecording}>Start Recording</button>
              <button
                onClick={async () => {
                  stopRecording();
                  const audioBlob = await fetch(mediaBlobUrl).then((r) =>
                    r.blob()
                  );
                  setMedia({ preview: mediaBlobUrl, raw: audioBlob });
                }}
              >
                Stop Recording
              </button>

              <div>
                <form onSubmit={handleSubmit}>
                  <input type='hidden' value={mediaBlobUrl} />
                  <input type='submit' value='Send' />
                </form>
              </div>
            </div>
          )}
        />
      </div>
    </SGuessSong>
  );
}

export default SubmitSong;
