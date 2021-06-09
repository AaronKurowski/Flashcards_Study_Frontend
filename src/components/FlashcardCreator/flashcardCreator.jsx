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

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit(event){
        event.preventDefault();
        debugger;
        const flashcard = {
            prompt: this.state.prompt,
            definition: this.state.definition,
            collection: this.props.selectedCollection.id
        };
        debugger;
        this.props.addNewFlashcard(flashcard);

        try{
            axios.post(`http://127.0.0.1:8000/collection/${this.props.allFlashcards[0].collection}/flashcard/`, flashcard);
        }
        catch(er){
            console.log(er);
        }
        
        this.setState({
            prompt: '', 
            definition: ''
        });
    }

    render(){
        return(
            <React.Fragment>
                {this.props.selectedCollection !== null &&
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <label for="prompt">Prompt</label>
                    <input type="text" name="prompt" id="prompt" value={this.state.prompt} onChange={(event) => this.handleChange(event)}></input>

                    <label for="definition">Definition</label>
                    <input type="text" name="definition" id="definition" value={this.state.definition} onChange={(event) => this.handleChange(event)}></input>

                    <button type="submit" value="Create">Create Card</button>
                </form>
                }
                {/* {this.props.allFlashcards.length == 0} */}
            </React.Fragment>
        );
    }
}

export default CreateFlashcard;