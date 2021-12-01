import React from "react";

import CollectionItem from '../collection/collection-item.component'
import './preview-collection.styles.scss';

const PreviewCollection = ({ title, items }) => (
    <div className='preview-collection'>
        <h1 className='title'>{title}</h1>
        <div className='preview'>
            {
                /* all these functions get rerendered on props call so this may be a 
                    performance issue */
                items
                    .filter((item, idx) => idx < 4)
                    .map(({id, ...itemProps}) => (
                        <CollectionItem key={id} {...itemProps} />
                    ))
            }
        </div>
    </div>
);

export default PreviewCollection;