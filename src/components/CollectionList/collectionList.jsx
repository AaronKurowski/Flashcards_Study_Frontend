import React from 'react';
import './collectionList.css';

const CollectionList = (props) => {

    return(
        <div className="header">
            {props.collections.map((collection, i) =>
                <div className={"collection-" + (i+1)}>
                    {collection.name}
                </div>
            )};
            {/* <div className="collection-1">
                <div className="collection-1-title">
                    Collection 1
                </div>
            </div>

            <div className="collection-2">
                Collection 2
            </div>

            <div className="collection-3">
                Collection 3
            </div>

            <div className="collection-4">
                Collection 4
            </div>

            <div className="collection-5">
                Collection 5
            </div> */}

        </div>
    );
}

export default CollectionList;