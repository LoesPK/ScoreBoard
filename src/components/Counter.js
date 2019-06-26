import React  from 'react';
import PropTyes from 'prop-types';

const Counter =({index, score, changeScore}) =>{


        return(
            <div className="counter">
                    <button className="counter-action decrement" onClick={() => changeScore(index, -1)} >-</button>
                    <span className="counter-score">{ score }</span>
                    <button className="counter-action increment"  onClick={() => changeScore(index, +1)} >+</button>
                </div>
        );

}

Counter.propTyes={
        index: PropTyes.number,
        score: PropTyes.number,
        changeScore: PropTyes.func
};

export default Counter;