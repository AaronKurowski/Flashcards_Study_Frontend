import React, { Component } from 'react';
import CollectionList from './CollectionList/collectionList.jsx';
import './app.css';
import axios from 'axios';
import CollectionStack from './CollectionStack/collectionStack.jsx';
import CreateFlashcard from './FlashcardCreator/flashcardCreator.jsx';
import CollectionCreator from './CollectionCreator/collectionCreator.jsx';


class App extends Component {
    constructor(props){
        super(props);
        debugger;
        this.getCollections();
        debugger;

        this.state = {
            selectedCollection: {},
            selectedCollectionCards: [],
            collectionList: []
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

    updateExistingCard = (flashcard, index) => {
        try{
            let query = `http://127.0.0.1:8000/collection/${flashcard.collection}/flashcard/${flashcard.id}/`;
            axios.put(query, flashcard);
        }
        catch(er){
            console.log("error")
            alert("Something went wrong when trying to update this flashcard")
        }

        alert("flashcard updated")

        const allCards = [...this.state.selectedCollectionCards];
        allCards[index] = flashcard;
        this.setState({selectedCollectionCards: allCards});
    }

    handleCollectionSelect = async (collection) => {
        // after clicking the flashcard div, set the content body with the contents of that collection
        let query = `http://127.0.0.1:8000/collection/${collection.id}/`;
        let collectionById = await axios.get(query);
        debugger;
        this.setState({
            selectedCollection: collectionById.data
        }, () => console.log(this.state.selectedCollection));

        this.getCollectionCards(collection);
    }

    addCollection = async (collection) => {
        let query = `http://127.0.0.1:8000/collection/`;
        axios.post(query, collection);

        // set the state
        const newCollectionList = [...this.state.collectionList, collection];
        
        this.setState({collectionList: newCollectionList, selectedCollection: collection});
        console.log('made it here');
    }
    
    render(){
        {console.log('selectedCollection', this.state.selectedCollection)}
        // {console.log('selectedCollectionCards', this.state.selectedCollectionCards)}
        return(
            <div className="main-container">
                <CollectionList selectCollection={this.handleCollectionSelect} collectionList={this.state.collectionList}/>
                <h1>Flashcards Study Tool</h1>
                {/* collection creator goes here */}
                {this.state.collectionList.length < 5 &&
                <CollectionCreator addCollection={this.addCollection} selectedCollection={this.state.selectedCollection}/>
                }
                {Object.keys(this.state.selectedCollection).length > 0 &&
                <CreateFlashcard allFlashcards={this.state.selectedCollectionCards} selectedCollection={this.state.selectedCollection} addNewFlashcard={this.addNewFlashcard}/>
                }
                <CollectionStack updateExistingCard={this.updateExistingCard} flip={this.handleFlip} selectedCollection={this.state.selectedCollection} allFlashcards={this.state.selectedCollectionCards} updateFlashcard={this.updateFlashcard}/>
                
                
            </div>
        );
    }
}

export default App;