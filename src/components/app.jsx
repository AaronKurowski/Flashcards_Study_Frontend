import React, { Component } from 'react';
import CollectionList from './CollectionList/collectionList.jsx';
import './app.css';
import axios from 'axios';

class App extends Component {
    constructor(props){
        super(props);
        debugger;
        this.getCollections();
        debugger;

        this.state = {
            selectedCollection: {},
            collectionList: [],
        }
    }

    

    getCollections = async () => {
        let query = "http://127.0.0.1:8000/collection/";
        let collections = await axios.get(query);
        this.setState({collectionList: collections.data});
        debugger;
        console.log(this.state.collectionList);
    }

    handleSelect = (collection) => {
        // this.setState({selectedCollection: collection})
    }

    render(){
        return(
            <React.Fragment>
                <CollectionList selectCollection={this.handleSelect} collections={this.state.collectionList}/>
                <h1>Flashcards Study Tool</h1>
            </React.Fragment>
        );
    }
}

export default App;