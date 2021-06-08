import React, { Component } from 'react';
import axios from 'axios';

class UpdateFlashcard extends Component{
    constructor(props){
        super(props);
        this.state = {
            prompt: props.currentCard.prompt,
            definition: props.currentCard.definition,
            collection: props.currentCard.collection
        }
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event){
        debugger;
        console.log('made it here');
        event.preventDefault();

        const flashcard = {
            prompt: this.state.prompt,
            definition: this.state.definition,
            //line below needs to change but state isn't updating in App.jsx
            collection: this.props.allFlashcards[0].collection
        }

        this.props.updateExistingCard(flashcard);

        try{
            let query = `http://127.0.0.1:8000/collection/${this.props.currentCard.collection}/flashcard/${this.props.currentCard.id}/`;
            axios.put(query, flashcard);
        }
        catch(er){
            console.log("error" + er)
        }
    }

    render(){
        return(
            <form onsubmit={(event) => this.handleSubmit(event)}>
                <label for="update-prompt">Prompt</label>
                <input type="text" name="update-prompt" id="update-prompt" value={this.state.prompt} onChange={(event) => this.handleChange(event)}></input>

                <label for="update-definition">Definition</label>
                <input type="text" name="update-definition" id="update-definition" value={this.state.definition} onChange={(event) => this.handleChange(event)}></input>
            
                <button type="submit">Update Card</button>
            </form>
        );
    }
}

export default UpdateFlashcard;