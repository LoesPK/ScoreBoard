import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';


class App extends Component {
  state = {
    players: [
      {
        name: "Team Poes",
        score: 0,
        id: 1
      },
      {
        name: "Team Chihuahua",
        score: 0,
        id: 2
      },
      {
        name: "Team Pinguïn",
        score: 0,
        id: 3
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