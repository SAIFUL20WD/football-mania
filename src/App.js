import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Player from './components/Player/Player';
import Team from './components/Team/Team';
import players from './playersData/playersData';

function App() {
  const [addedPlayers, setAddedPlayers] = useState([])

  const handleAddPlayer = (player) => {
    const newPlayers = [...addedPlayers, player]
    setAddedPlayers(newPlayers)
  }

  return (
    <section>
      <Header />
      <div className="container">
        <div className="row d-flex flex-lg-row flex-sm-column-reverse top">

          <div className="col-lg-10">
            <div className="row player-container">
              <h3 className="text-center p-3">Select Desired Player To Make Your Team</h3>
              {
                players.map(player => <Player playerInfo={player} key={player.id} handleAddPlayer={handleAddPlayer}/>)
              }
            </div>
          </div>

          <div className="col-lg-2 col-sm-12">
            <Team teamInfo={addedPlayers}/>
          </div>

        </div>
      </div>
    </section>
  );
}

export default App;
