import React  from 'react'; 
import PropTypes from 'prop-types';

const Stats = ({players}) =>{

    const totalPlayers = players.length;
    const totalPoints = players.reduce((total, player) =>
    {
        return total + player.score;
    },0);

    return(
    <table className="stats">
        <tbody>
            <tr>
                <td>Teams:</td>
                <td>{totalPlayers}</td>
            </tr>
            <tr>
                <td>Totale punten:</td>
                <td>{totalPoints}</td>
            </tr>
        </tbody>
    </table>
    );
} 

Stats.propTypes = { 
    players: PropTypes.arrayOf(PropTypes.shape({
        score: PropTypes.number
    })),
};

export default Stats;