import React from 'react';
import './cardCount.css';

const CardCount = (props) => {
    return(
        // returns the count of the card in a div
        <React.Fragment>
            <div className="counter">
                Card <strong>{props.index + 1}</strong> of <strong>{props.allFlashcards.length}</strong>
            </div>
        </React.Fragment>
    );
}

export default CardCount;