import Header from './components/Header';
import Homepage from './components/Pages/Home';
import GuessSong from './components/Pages/GuessSong';
import SubmitSong from './components/Pages/SubmitSong';
import Contact from './components/Pages/Contact';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header />

      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route path='/GuessSong'>
          <GuessSong />
        </Route>
        <Route path='/SubmitSong'>
          <SubmitSong />
        </Route>
        <Route path='/Contact'>
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
