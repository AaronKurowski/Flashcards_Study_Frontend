import React, {useState} from 'react';
import './collectionCreator.css';


const CollectionCreator = (props) => {
    
    const [name, setName] = useState(null)

    const handleChange = (event) => {
        setName(event.target.value);
    }
    
    const handleCollectionSubmit = (event) => {
        event.preventDefault();
        
        setName(event.target.value);

        const newCollection = {
            name: name
        }

        props.addCollection(newCollection);
    }

    
    return(
        <div className="collection-div"> 
                <form className="collection-form" onSubmit={(event) => handleCollectionSubmit(event)}>

                    <label for="name">Collection Name: </label>
                    <input type="text" name="name" id="name" value={name} onChange={(event) => handleChange(event)}></input>

                    <button type="submit">Create Collection</button>
                </form>
        </div>
    );
}

export default CollectionCreator;