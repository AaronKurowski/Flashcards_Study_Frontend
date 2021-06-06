import React, { Component } from 'react';
import CollectionList from './CollectionList/collectionList.jsx';
import './app.css';
import axios from 'axios';
import CollectionStack from './CollectionStack/collectionStack.jsx';
import Footer from './Footer/footer.jsx';


class App extends Component {
    constructor(props){
        super(props);
        this.getCollections();

        this.state = {
            selectedCollection: {},
            selectedCollectionCards: [],
            collectionList: [],
        }
    }

    getCollections = async () => {
        let query = "http://127.0.0.1:8000/collection/";
        let collections = await axios.get(query);
        this.setState({collectionList: collections.data});
        console.log(this.state.collectionList);
    }

    getCollectionCards = async (collection) => {
        let query = `http://127.0.0.1:8000/collection/${collection.id}/flashcard/`
        let flashcards = await axios.get(query);
        this.setState({selectedCollectionCards: flashcards});
        debugger;
        console.log(this.state.selectedCollectionCards.data);
    }

    handleSelect = (collection) => {
        // after clicking the flashcard div, set the content body with the contents of that collection
        this.setState({selectedCollection: collection});
        debugger;
        this.getCollectionCards(collection);
    }

    render(){
        return(
            <div className="main-container">
                <CollectionList selectCollection={this.handleSelect} collections={this.state.collectionList}/>
                <h1>Flashcards Study Tool</h1>
                <CollectionStack currentFlashcards={this.state.selectedCollectionCards.data} />
                <Footer />
            </div>
        );
    }
}

export default App;