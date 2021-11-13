import React from 'react';
import img from '../../Images/bg-slider3.jpg';

const PlaceOrder = () => {
    return (
        <div>
            <h1 className='text-primary my-5'>Your Order Is Placed</h1>
            <img src={img} alt="" />
        </div>
    );
};

export default PlaceOrder;