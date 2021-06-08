import React, {Component} from 'react';
import axios from 'axios';

class CreateFlashcard extends Component {
    constructor(){
        super();
        this.state = {
            prompt: '',
            definition: ''
        };
    };

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit(event, props){
        event.preventDefault();

        const flashcard = {
            prompt: this.state.prompt,
            definition: this.state.definition
        };

        props.addNewFlashcard(flashcard);

        let query = axios.post(`http://127.0.0.1:8000/collection/${props.selectedCollection.id}/flashcard/`);
        console.log(query);

        this.setState({
            prompt: '', 
            definition: ''
        });
    }

    render(){
        return(
            <form onSubmit={() => this.handleSubmit()}>
                <label for="prompt">Prompt</label>
                <input type="text" name="prompt" id="prompt" value={this.state.prompt}/>

                <label for="definition">Definition</label>
                <input type="text" name="definition" id="definition" value={this.state.definition}/>

                <button type="submit">Create Card</button>
            </form>
        );
    }
}

export default CreateFlashcard;