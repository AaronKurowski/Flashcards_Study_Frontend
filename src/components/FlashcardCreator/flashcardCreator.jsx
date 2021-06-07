import React, {Component} from 'react';
import axios from 'axios';

class CreateFlashcard extends Component {
    constructor(props){
        super(props);
        this.state = {
            prompt: '',
            definition: ''
        }
    }

    handleSubmit(event){
        event.preventDefault();

        const flashcard = {
            prompt: this.state.prompt,
            definition: this.state.definition
        }

        this.props.AddNewFlashcard(flashcard);

        let query = await axios.post(`http://127.0.0.1:8000/collection/${props.selectedCollection.id}/flashcard/`);
        console.log(query);
    }

    render(){
        return(
            <form onSubmit>
                <label for="prompt">Prompt</label>
                <input type="text" name="prompt" id="prompt" value={this.state.prompt}/>

                <label for="definition">Definition</label>
                <input type="text" name="definition" id="definition" value={this.state.definition}/>
            </form>
        );
    }
}

export default CreateFlashcard;