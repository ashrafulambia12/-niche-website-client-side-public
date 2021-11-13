import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'


const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://polar-wildwood-84479.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully');
                    reset();
                }
                console.log(res);

            })
    }
    return (
        <div className='add-service'>
            <h2> Please add a Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='id' type="number" {...register("id",)} />
                <input placeholder='Name' {...register("serviceName",)} />
                <textarea placeholder='Description' {...register("description",)} />
                <textarea placeholder='Short Description' {...register("srt",)} />
                <input placeholder='Price' type="number" {...register("price",)} />
                <input placeholder='Image URL' {...register("img",)} />
                <input type="submit" />
            </form>

        </div>
    );
};

export default AddService;