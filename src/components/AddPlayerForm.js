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
                    placeholder="Voer teamnaam in"
                />
                <input 
                    type="submit"
                    value="Voeg team toe"
                />
            </form>
        );
}

export default AddPlayerForm
