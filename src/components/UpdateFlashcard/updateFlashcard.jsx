import React, {useState} from 'react';
import axios from 'axios';

const UpdateFlashcard = (props) => {

    // const [card, setCard] = useState(props.allFlashcards[])
    const [currentCard, setCurrentCard] = useState(null);
    const [index, setIndex] = useState(0);


    // useEffect(() => {
    //     if(props.allFlashcards.length > 0){
    //         debugger;
    //         setCurrentCard(props.allFlashcards[index].prompt);
    //     }
    // }, [props.allFlashcards, index]);
    
    // handleSubmit(event){
    //     event.preventDefault();

    // }

    return(
        <form onsubmit={(event) => this.handleSubmit(event)}>
            <label for="update-prompt">Prompt</label>
            <input type="text" name="update-prompt" id="update-prompt"></input>

            <label for="update-definition">Definition</label>
            <input type="text" name="update-definition" id="update-definition"></input>
        
            <button type="submit">Update Card</button>
        </form>
    );
}

export default UpdateFlashcard;

// updateFlashcard = async (props) => {
//         let query = `http://127.0.0.1:8000/collection/${props.allFlashcards[0].collection}/flashcard/${props.allFlashcards[index]}/`;
//         let flashcard = await axios.put(query);
//         this.setState({...this.state.selectedCollectionCards, flashcard})
//     }
