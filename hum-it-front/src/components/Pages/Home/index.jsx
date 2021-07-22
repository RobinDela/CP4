import Button from '../../Ui/Button';
import { Link } from 'react-router-dom';
import SHome from './style';

const Homepage = () => {
  return (
    <SHome>
      <h1>What is Hum it?</h1>
      <div className='introduction'>
        <p>
          You wake up in the morning and you have this melody stuck in your
          head, you want to listen to it but you can't remember the name...
          <br></br> You ask a friend or a coworker and start to hum it (it goes:
          Doodoodoo dadadaa blablabluh) and Bingo!<br></br> It was Rosana from
          TOTO. This web site is the same thing but on a higher scale it connect
          human to human
        </p>
      </div>
      <div className='buttons'>
        <Link to='/SubmitSong'>
          <Button submit>Start humming</Button>
        </Link>
        <Link to='/GuessSong'>
          <Button record>Listen hummer</Button>
        </Link>
      </div>
    </SHome>
  );
};
export default Homepage;
