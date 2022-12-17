import {useState} from 'react';
import './App.css';
import PlayerCard from '../../components/card'
import Header from '../../components/header'
import SearchBySeasonAndLeague from '../searchSeasonAndLeague';
import Footer from '../Footer';

function App() {
const [players, setPlayers] = useState([]);

  return (
    <div className="App"
>
      <Header/>
      <SearchBySeasonAndLeague setPlayers={setPlayers} />
      <PlayerCard players={players}/>
      <Footer/>
    </div>
  );
}

export default App;
