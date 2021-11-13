import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Rating from 'react-rating';

const Service = ({ service }) => {
    // console.log(service);
    const { _id, serviceName, srt, price, star, img } = service || {};
    return (
        <div className='col-md-4'>
            <img width='250px' height='200px' src={img} alt="" />
            <h3>{serviceName}</h3>
            <h5>Discription: {srt}</h5>
            <h5>Price: {price}</h5>
            <Rating
                initialRating={4}
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                readonly></Rating> <br />
            <Link style={{ textDecoration: 'none' }} to={`/booking/${_id}`}>
                <Button sx={{ my: 3 }} variant="outlined" color="error">Book {serviceName?.toLowerCase()}</Button>
            </Link>
        </div>
    );
};

export default Service;

