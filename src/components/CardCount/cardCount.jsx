import React from 'react';
import './cardCount.css';

const CardCount = (props) => {
    debugger;
    return(
        // returns the count of the card in a div or something
        <div className="counter">
            Card {props.index + 1} of {props.allFlashcards.length}
        </div>
    );
}

export default CardCount;