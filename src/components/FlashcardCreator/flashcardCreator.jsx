// import {Button, Modal} from 'react-bootstrap';
import React, {Component} from 'react';
import axios from 'axios';


class CreateFlashcard extends Component {
    constructor(props){
        super(props);
        this.state = {
            prompt: '',
            definition: '',
            showModal: false
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        });
    }

    handleSubmit(event){
        event.preventDefault();
        const flashcard = {
            prompt: this.state.prompt,
            definition: this.state.definition,
            collection: this.props.selectedCollection.id
        };
        this.props.addNewFlashcard(flashcard);

        try{
            axios.post(`http://127.0.0.1:8000/collection/${this.props.selectedCollection.id}/flashcard/`, flashcard);
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
                        <form onSubmit={(event) => this.handleSubmit(event)}>
                            <label for="prompt">Prompt</label>
                            <input type="text" name="prompt" id="prompt" value={this.state.prompt} onChange={(event) => this.handleChange(event)}></input>

                            <label for="definition">Definition</label>
                            <input type="text" name="definition" id="definition" value={this.state.definition} onChange={(event) => this.handleChange(event)}></input>

                            <button type="submit" value="Create">Create Card</button>
                        </form>
            </React.Fragment>
        );
    }
}

export default CreateFlashcard;





            // <form onSubmit={(event) => this.handleSubmit(event)}>
            //                 <label for="prompt">Prompt</label>
            //                 <input type="text" name="prompt" id="prompt" value={this.state.prompt} onChange={(event) => this.handleChange(event)}></input>

            //                 <label for="definition">Definition</label>
            //                 <input type="text" name="definition" id="definition" value={this.state.definition} onChange={(event) => this.handleChange(event)}></input>

            //                 <button type="submit" value="Create">Create Card</button>
            //             </form>