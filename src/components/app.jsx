import React, { Component } from 'react';
import CollectionList from './CollectionList/collectionList.jsx';
import './app.css';

class App extends Component {
    // constructor(props){
    //     super(props);
    //     // get collections if there are any
    // }

    state = {
        selectedCollection: {},
        collectionList: [],
    }

    handleSelect = (collection) => {
        // function to handle a users selection of a collection
    }

    render(){
        return(
            <React.Fragment>
                <CollectionList />
                <h1>Flashcards Study Tool</h1>
            </React.Fragment>
        );
    }
}

export default App;