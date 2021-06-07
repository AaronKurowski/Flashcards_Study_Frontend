import React, {useState} from 'react';
import './collectionStack.css';

// put functions in app.jsx and pass them here. just a hook?

const CollectionStack = (props) => {

    // might need this idk
    // [currentCard, setCurrentCard] = useState("")

    return(
        <React.Fragment>
            <div className="content-container">

                <div className="previous-btn">
                    <button className="prev-next-btn">Back</button>
                </div>

                <div className="top-card">
                    <div className="card-text">
                        {ReturnCorrectCard(props)}
                    </div>
                </div>

                <div className="next-btn">
                    <button className="prev-next-btn">Next</button>
                </div>

                {/*Flip button */}
            </div>

            <div className="flip-div">
                <button onClick className="flip-btn">Flip!</button>
            </div>
        </React.Fragment>
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