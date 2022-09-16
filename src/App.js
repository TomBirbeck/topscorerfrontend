// import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {
const [players, setPlayers] = useState([]);
const [year, setYear] = useState()

async function getPlayers(){
  const res = await fetch('https://topscorers.herokuapp.com/topscorer/year/1992');
  const data = await res.json()
  console.log(data)
}

getPlayers()
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
