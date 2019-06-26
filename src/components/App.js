import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';


class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      },
      {
        name: "Loes",
        score: 0,
        id: 5
      },
      {
        name: "Martin",
        score: 0,
        id: 6
      },
      {
        name: "Mira",
        score: 0,
        id: 7
      }
    ]
  }

  prevPlayerID = 7;

  handleScoreChange = (index, delta) => {

    this.setState(prevState => (
      {
        score: prevState.players[index].score += delta
        
      }));
  }

  getHighScores = () =>{
    const scores = this.state.players.map( p => p.score);
    const highScore = Math.max(...scores);
    if(highScore){
      return highScore
    }
    return null;
  }

  handleAddPlayer = (name) => {
    this.setState(prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: this.prevPlayerID += 1,
          }
        ]
      }
    });
  }

  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    const highScore = this.getHighScores();
    return (
      <div className="scoreboard">
        <Header players={this.state.players} />

        {this.state.players.map((
          player, index) =>
          <Player
            name={player.name}
            id={player.id}
            score={player.score}
            key={player.id.toString()}
            index={index}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
            isHighScore = {highScore === player.score}
          />
        )}
        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    )
  }
}

export default App;