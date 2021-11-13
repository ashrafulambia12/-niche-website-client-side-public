
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import OrderItems from '../OrderItems/OrderItems';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

const Orders = () => {
    const { _id, email } = useParams();
    const { user } = useAuth();
    const [orders, setOrders] = useState([])


    useEffect(() => {
        const url = `https://polar-wildwood-84479.herokuapp.com/myorders/${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
        // console.log(data)
    }, [user.email]);
    return (
        <div className="container text-center">
            <div>
                <h4>Your Details</h4>
                <h3>Name: {user.displayName}</h3>
                <img style={{ height: '100px', borderRadius: "50%" }} src={user.photoURL} alt={user.name} />
            </div>
            <hr />
            <h3>You ordered <span className="text-danger"> {orders.length} </span> Items</h3>
            <table className="table table-stripped">
                <thead className="fs-3">
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Order Date & Time</th>
                        <th scope="col">Manage Orders</th>
                    </tr>
                </thead>
                {
                    orders.map(order => <OrderItems order={order} />)
                }
            </table>
            <div>
                <button className="btn btn-danger"><Link className="link-item-style" to={`/placeorder`}>Place Orders </Link></button>
            </div>
        </div>
    );
};

export default Orders;