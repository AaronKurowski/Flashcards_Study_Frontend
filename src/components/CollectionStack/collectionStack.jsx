import React from 'react';
import './collectionStack.css';

// put functions in app.jsx and pass them here. just a hook?

const CollectionStack = (props) => {






    return(
        <div className="content-container">
            <div className="previous-btn">
                <button>Back</button>
            </div>
            <div className="top-card">
                <div className="card-text">
                    {ReturnCorrectCard(props)}
                </div>
                {/*these will render separately */}
            </div>
            <div className="next-btn">
                <button>Next</button>
            </div>
        </div>
    );
}

const ReturnCorrectCard = (props) => {
    if(!props.currentFlashcards){
        return "";
    }
    else{
        return props.currentFlashcards[0].prompt;
    }
}

export default CollectionStack;