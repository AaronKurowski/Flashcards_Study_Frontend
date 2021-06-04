import React from 'react';
import './collectionList.css';

const CollectionList = () => {

    return(
        <div className="header">

            <div className="collection-1">
                {/* Will likely get rid of the title div and place that in a new
                component */}
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
            </div>

        </div>
    );
}

export default CollectionList;