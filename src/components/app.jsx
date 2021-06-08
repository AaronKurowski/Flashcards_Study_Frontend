import React, { Component } from 'react';
import CollectionList from './CollectionList/collectionList.jsx';
import './app.css';
import axios from 'axios';
import CollectionStack from './CollectionStack/collectionStack.jsx';
import Footer from './Footer/footer.jsx';
import CreateFlashcard from './FlashcardCreator/flashcardCreator.jsx';


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
    }

    getCollectionCards = async (collection) => {
        let query = `http://127.0.0.1:8000/collection/${collection.id}/flashcard/`;
        let flashcards = await axios.get(query);
        //might be easy to implement a reclick of collections
        
        this.setState({selectedCollectionCards: flashcards.data});
        console.log(this.state.selectedCollectionCards);
    }

    addNewFlashcard = (flashcard) => {
        this.setState({
            selectedCollectionCards: [...this.state.selectedCollectionCards, flashcard]
        })
        alert("Flashcard successfully added!")
    }

    // createNewFlashcard = async (collection, flashcard) => {
    //     let query = `http://127.0.0.1:8000/collection/${collection.id}/flashcard/`;
    //     let flashcard = await axios.post(query);
    //     this.setState({...this.state.selectedCollectionCards, flashcard})
    // }

    // updateFlashcard = async (collection, flashcard) => {
    //     let query = `http://127.0.0.1:8000/collection/${collection.id}/flashcard/${flashcard.id}/`;
    //     let flashcard = await axios.put(query);
    //     this.setState({...this.state.selectedCollectionCards, flashcard})
    // }

    handleCollectionSelect = (collection) => {
        // after clicking the flashcard div, set the content body with the contents of that collection
        debugger;
        this.setState({
            selectedCollection: collection
        });
        debugger;
        this.getCollectionCards(collection);
    }

    render(){
        {console.log('selectedCollection', this.state.selectCollection)}
        {console.log('selectedCollectionCards', this.state.selectedCollectionCards)}
        return(
            <div className="main-container">
                <CollectionList selectCollection={this.handleCollectionSelect} collections={this.state.collectionList}/>
                <h1>Flashcards Study Tool</h1>
                <CollectionStack flip={this.handleFlip} allFlashcards={this.state.selectedCollectionCards} />
                <CreateFlashcard selectedCollection={this.selectedCollection} addNewFlashcard={this.addNewFlashcard}/>
                <Footer />
            </div>
        );
    }
}

export default App;