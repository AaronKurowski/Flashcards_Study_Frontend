import React, {useState, useEffect} from 'react';
import './collectionStack.css';
import UpdateFlashcard from '../UpdateFlashcard/updateFlashcard.jsx';

// put functions in app.jsx and pass them here. just a hook?

const CollectionStack = (props) => {

    const [currentCard, setCurrentCard] = useState(null);
    const [index, setIndex] = useState(0);
    const [promptUpdate, setPromptUpdate] = useState();
    const [definitionUpdate, setDefinitionUpdate] = useState();

    useEffect(() => {
        if(props.allFlashcards.length > 0){
            setCurrentCard(props.allFlashcards[index].prompt);
        }
    }, [props.allFlashcards, index]);

    const flipCard = () => {
        if(currentCard === props.allFlashcards[index].prompt){
            setCurrentCard(props.allFlashcards[index].definition);
        }
        else{
            setCurrentCard(props.allFlashcards[index].prompt);
        }
    }

    const nextCard = () => {
        if(index < props.allFlashcards.length - 1){
            setIndex(index + 1);
        }
        // setCurrentCard(props.allFlashcards[index].prompt);   
    }

    const previousCard = () => {
        if(index > 0){
            setIndex(index - 1);
        }
        // setCurrentCard(props.allFlashcards[index].prompt);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        debugger;

        const flashcard = {
            id: props.allFlashcards[index].id,
            prompt: promptUpdate,
            definition: definitionUpdate,
            collection: props.allFlashcards[index].collection
        }
        props.updateExistingCard(flashcard);
    }

    return(
        <React.Fragment>
            {currentCard &&
                <React.Fragment>
                    <form onSubmit={(event, props) => handleSubmit(event, props)}>
                        <label for="update-prompt">Prompt</label>
                        <input type="text" name="update-prompt" id="update-prompt" value={promptUpdate} onChange={event => setPromptUpdate(event.target.value)}></input>

                        <label for="update-definition">Definition</label>
                        <input type="text" name="update-definition" id="update-definition" value={definitionUpdate} onChange={event => setDefinitionUpdate(event.target.value)}></input>
                    
                        <button type="submit">Update Card</button>
                    </form>
                    {/* <UpdateFlashcard updateExistingCard={props.updateExistingCard} selectedCollectionCards={props.currentCollectionCards} currentCollection={props.currentCollection} currentCard={currentCard} index={index}/> */}
                    <div className="content-container">
                        <div className="previous-btn">
                            <button onClick={() => previousCard()} className="prev-next-btn">Back</button>
                        </div>
                        <div className="top-card">
                            <div className="card-text">
                                {currentCard}
                            </div>
                        </div>
                        <div className="next-btn">
                            <button onClick={() =>  nextCard()} className="prev-next-btn">Next</button>
                        </div>
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