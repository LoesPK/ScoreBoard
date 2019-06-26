import React from 'react';

const AddPlayerForm = ({addPlayer}) => {

    let playerInput = React.createRef();


    let handleSubmit = (e) => {
        e.preventDefault();
        addPlayer(playerInput.current.value);
        e.currentTarget.reset();
    } 

        return(
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    ref={playerInput}
                    placeholder="Voer spelers naam in"
                />
                <input 
                    type="submit"
                    value="Voeg speler toe"
                />
            </form>
        );
}

export default AddPlayerForm
