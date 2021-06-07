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
    }

    getCollectionCards = async (collection) => {
        let query = `http://127.0.0.1:8000/collection/${collection.id}/flashcard/`
        let flashcards = await axios.get(query);
        this.setState({selectedCollectionCards: flashcards.data});
        console.log(this.state.selectedCollectionCards);
    }

    handleCollectionSelect = (collection) => {
        // after clicking the flashcard div, set the content body with the contents of that collection
        debugger;
        this.setState({
            selectedCollection: collection
        });
        console.log(this.state.selectedCollection);
        debugger;
        this.getCollectionCards(collection);
    }

    // handleFlip = () => {
    //     if(this.state.currentCardFace === this.state.currentFlashcard.prompt){
    //         this.setState({currentCardFace: this.state.currentFlashcard.definition})
    //     }
    //     else{
    //         this.setState({currentCardFace: this.state.currentFlashcard.prompt})
    //     }
    // }

    render(){
        {console.log('selectedCollection', this.state.selectCollection)}
        {console.log('selectedCollectionCards', this.state.selectedCollectionCards)}
        return(
            <div className="main-container">
                <CollectionList selectCollection={this.handleCollectionSelect} collections={this.state.collectionList}/>
                <h1>Flashcards Study Tool</h1>
                <CollectionStack flip={this.handleFlip} allFlashcards={this.state.selectedCollectionCards} />
                <Footer />
            </div>
        );
    }
}

export default App;