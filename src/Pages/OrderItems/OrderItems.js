import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const OrderItems = ({ order }) => {
    const { serviceName, date, price } = order
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://polar-wildwood-84479.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders]);
    const handleDelete = id => {
        const proceed = window.confirm('confirm your activity');

        const url = `https://polar-wildwood-84479.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    alert('deletet')
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                }
            })
    }

    return (
        <tbody className="fs-4">
            <tr>
                <td>{serviceName}</td>
                <td>{price}</td>
                <td>{date}</td>
                <td> <div>
                    <button onClick={() => handleDelete(order._id)} className="btn btn-danger"><Link className="link-item-style">DELETE </Link></button>
                </div></td>
            </tr>
        </tbody>
    );
};

export default OrderItems;