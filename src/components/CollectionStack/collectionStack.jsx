import React, {useState, useEffect} from 'react';
import './collectionStack.css';

// put functions in app.jsx and pass them here. just a hook?

const CollectionStack = (props) => {

    // might need this idk
    const [currentCard, setCurrentCard] = useState(null);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if(props.allFlashcards.length > 0){
            debugger;
            setCurrentCard(props.allFlashcards[index].prompt);
        }
    }, [props.allFlashcards]);

    const flipCard = () => {
        if(currentCard === props.allFlashcards[index].prompt){
            setCurrentCard(props.allFlashcards[index].definition);
        }
        else{
            setCurrentCard(props.allFlashcards[index].prompt);
        }
    }

    const nextCard = () => {
        debugger;
        setIndex(index++);
        setCurrentCard(props.allFlashcards[index].prompt);
        debugger;
    }

    const previousCard = () => {
        setIndex(index - 1);
    }

    // const returnCorrectCard = (props) => {
    //     if(props.allFlashcards.length === 0){
    //         // setCurrentCard("No Cards in Stack");
    //         currentCard = "None";
    //         return currentCard;
    //     }
    //     else{
    //         let i = 0;
    //         // currentCard = props.allFlashcards[0].prompt;
    //         setCurrentCard(props.allFlashcards[0].prompt);
    //         return currentCard;
    //     }
    // }

    return(
        <React.Fragment>
            {currentCard &&
                <React.Fragment>
                    <div className="content-container">
                        <div className="previous-btn">
                            <button onClick={() => previousCard()} className="prev-next-btn">Back</button>
                        </div>
                        <div className="top-card">
                            <div className="card-text">
                                {/* {returnCorrectCard(props)} */}
                                {currentCard}
                                {/* {props.allFlashcards[0].prompt} */}
                            </div>
                        </div>
                        <div className="next-btn">
                            <button onClick={() => nextCard()} className="prev-next-btn">Next</button>
                        </div>
                        {/*Flip button */}
                    </div>
                    <div className="flip-div">
                        <button onClick={() => flipCard()} className="flip-btn">Flip!</button>
                    </div>
                </React.Fragment>
            }
            {currentCard == null &&
                <h1>No Cards</h1>
            }
        </React.Fragment>
    );
}

export default CollectionStack;