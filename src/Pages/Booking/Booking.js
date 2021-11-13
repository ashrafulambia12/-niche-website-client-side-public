import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Booking.css';
import { useParams } from 'react-router-dom'

const Booking = () => {
    const { _id } = useParams();
    console.log(_id);
    const { user } = useAuth();
    const [details, setDetails] = useState([]);
    const [booking, setBooking] = useState({});
    const { register, handleSubmit, formState: { errors } } = useForm();
    let history = useHistory();
    const onSubmit = data => {
        data.serviceName = booking.serviceName;
        data.price = booking.price;
        data.date = new Date().toDateString('DD-MM-YYYY');
        fetch('https://polar-wildwood-84479.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed Successfully');
                    history.push(`/checkout/${_id}`)

                }
            })
        console.log(_id);
    }

    useEffect(() => {
        fetch('https://polar-wildwood-84479.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setDetails(data))

    }, []);

    useEffect(() => {
        const getDetails = details.find(detail => detail._id === _id)
        setBooking(getDetails)
    }, [details, _id])

    return (
        <div className='col-md-8 col-12 col-sm-12 py-2 text-center m-auto my-5'>
            <div className='card'>
                <img className='img-fluid card-img-top' src={booking?.img} alt='...'></img>
                <div className='card-body'>
                    <h4 className='card-title'><strong>Service Name : </strong>{booking?.serviceName}</h4>
                    <h6><strong>Service Price : </strong>{booking?.price}</h6>
                    <p className='card-text mx-3'><strong>Details : </strong>{booking?.description}</p>
                    <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                        <input defaultValue={user.displayName} {...register("name")} />

                        <input defaultValue={user.email} {...register("email", { required: true })} />
                        {errors.email && <span className="error">This field is required</span>}
                        <input placeholder="Address" defaultValue="" {...register("address")} />
                        <input placeholder="City" defaultValue="" {...register("city")} />
                        <input placeholder="phone number" defaultValue="" {...register("phone")} />

                        <input className="btn btn-danger" type="submit" value="Book  Now" />
                    </form>

                </div>

            </div>





        </div>
    );
};

export default Booking;