import React from 'react';
import './collectionList.css';

const CollectionList = (props) => {
    debugger;
    return(
        <React.Fragment>
            {props.collectionList.length > 0 &&
                <div className="header">
                    {props.collectionList.map((collection, i) =>
                        <div onClick={() => props.selectCollection(collection)} className={"collection-" + (i+1)}>
                            {collection.name}
                        </div>
                    )}
                </div>
            }
            {props.collectionList.length === 0 &&
                <p>No Collections -- Use the form below to create a max of 5 collection!</p>
            }
        </React.Fragment>
    );
}

export default CollectionList;