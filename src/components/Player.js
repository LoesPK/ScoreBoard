import React, { PureComponent } from 'react';
import PropTyes from 'prop-types';
import Counter from './Counter';
import Icon from './Icon';

class Player extends PureComponent{

    static propTypes = {
        changeScore: PropTyes.func,
        removePlayer: PropTyes.func,
        name: PropTyes.string.isRequired,
        score: PropTyes.number.isRequired,
        index: PropTyes.number.isRequired,
        id: PropTyes.number.isRequired,
        isHighScore: PropTyes.bool
    };

    render(){
        const {name, id, score, index, removePlayer, changeScore, isHighScore } = this.props;
        

        return (

            <div className="player">
                <span className="player-name">
                <button className = "remove-player" onClick={ () => removePlayer(id)}>✖</button>
                <Icon 
                        isHighScore = {isHighScore}
                    />
                    {name}
                    
                </span>
                <Counter 
                    score={score}
                    changeScore={changeScore}
                    index={index}
                />
            </div>
        );
    }  
}
export default Player;