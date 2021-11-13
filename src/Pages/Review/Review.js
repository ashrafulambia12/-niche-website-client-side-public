import React from 'react';

const Review = ({ review }) => {
    const { displayName, description, price, } = review || {};
    return (
        <div className='col-md-4'>

            <h3>{displayName}</h3>
            <h5>Review: {description}</h5>
            <h5>Rating : {price}</h5>

        </div>
    );
};

export default Review;

