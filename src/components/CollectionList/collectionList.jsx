import React from 'react';
import './collectionList.css';

const CollectionList = (props) => {

    return(
        <React.Fragment>
        <div className="header">
            {props.collections.map((collection, i) =>
                <div onClick={() => props.selectCollection(collection)} className={"collection-" + (i+1)}>
                    {collection.name}
                </div>
            )}
        </div>
        </React.Fragment>
    );
}

export default CollectionList;