import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import '../Review/Review.css'
import useAuth from '../../hooks/useAuth';

const AddReview = () => {
    const { user, } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://polar-wildwood-84479.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully');
                    reset();
                }
                console.log(res);
                console.log(user.displayName);

            })
    }
    return (
        <div className='add-service'>
            <h2> Please add a Reviews</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("displayName",)} required />
                <textarea placeholder='Please Type Your Reviews' required {...register("description",)} />
                <input placeholder='Add review retting 1 to 5' required type="number" {...register("price",)} />

                <input type="submit" />
            </form>

        </div>
    );
};

export default AddReview;