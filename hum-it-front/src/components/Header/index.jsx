import SHeader from './style';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <SHeader>
      <header className='Header'>
        <div class='LogoTitle'>
          <h1 className='h1-style'>Hum it</h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/SubmitSong'>A song stuck in your head?</Link>
            </li>
            <li>
              <Link to='/GuessSong'>Guess the song</Link>
            </li>
            <li>
              <Link to='/Contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </SHeader>
  );
};
export default Header;
