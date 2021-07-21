import SHeader from './style';

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
              <a href='default.asp'>Home</a>
            </li>
            <li>
              <a href='news.asp'>A song stuck in your head?</a>
            </li>
            <li>
              <a href='contact.asp'>Guess the song</a>
            </li>
            <li>
              <a href='about.asp'>Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </SHeader>
  );
};
export default Header;
