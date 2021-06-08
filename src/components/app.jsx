import React, { Component } from 'react';
import CollectionList from './CollectionList/collectionList.jsx';
import './app.css';
import axios from 'axios';
import CollectionStack from './CollectionStack/collectionStack.jsx';
import Footer from './Footer/footer.jsx';
import CreateFlashcard from './FlashcardCreator/flashcardCreator.jsx';
import UpdateFlashcard from './UpdateFlashcard/updateFlashcard.jsx';


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

    updateExistingCard = (flashcard) => {
        debugger;
        
        try{
            let query = `http://127.0.0.1:8000/collection/${flashcard.collection}/flashcard/${flashcard.id}/`;
            axios.put(query, flashcard);
        }
        catch(er){
            console.log("error" + er)
        }

        alert("flashcard updated")

        // this.setState({
        //     selectedCollectionCards: [...this.state.selectedCollectionCards, flashcard]
        // });
    }

    handleCollectionSelect = (collection) => {
        // after clicking the flashcard div, set the content body with the contents of that collection
        this.setState({
            selectedCollection: collection
        }, () => console.log(this.state.selectedCollection));
        this.getCollectionCards(collection);
    }

    render(){
        {console.log('selectedCollection', this.state.selectCollection)}
        {console.log('selectedCollectionCards', this.state.selectedCollectionCards)}
        return(
            <div className="main-container">
                <CollectionList selectCollection={this.handleCollectionSelect} collections={this.state.collectionList}/>
                <h1>Flashcards Study Tool</h1>
                <CollectionStack updateExistingCard={this.updateExistingCard} flip={this.handleFlip} selectedCollection={this.state.selectedCollection} allFlashcards={this.state.selectedCollectionCards} updateFlashcard={this.updateFlashcard}/>
                <CreateFlashcard allFlashcards={this.state.selectedCollectionCards} selectedCollection={this.selectedCollection} addNewFlashcard={this.addNewFlashcard}/>
                {/* <UpdateFlashcard allFlashcards={this.state.selectedCollectionCards} /> */}
                <Footer />
            </div>
        );
    }
}

export default App;