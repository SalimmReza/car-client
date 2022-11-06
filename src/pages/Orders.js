import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import img from '../assets/images/checkout/checkout.png'
import OrderDetails from './OrderDetails';
import app from '../firebase/firebase.confic';

const Orders = () => {
    const { user, logOut } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    console.log(orders)

    const url = `http://localhost:5000/orders?email=${user?.email}`
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`,
            {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut()
                }
                return res.json()

            })
            .then(data => setOrders(data))
    }, [user?.email, logOut])

    const handleDelete = (id) => {
        const proceed = window.confirm('Do you want to Delete')
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE',

                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted');
                        const remaining = orders.filter(ordr => ordr._id !== id);
                        setOrders(remaining);
                    }
                })

        }
    }

    const handleUpdate = (id) => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                const remaining = orders.filter(odr => odr._id !== id);
                const approving = orders.find(odr => odr._id === id);
                approving.status = 'Approved'
                const newOrder = [...remaining, approving];
                setOrders(newOrder);
            })
    }
    return (
        <div className='w-[80%] mx-auto'>

            <div className='relative'>
                <img className='w-full' src={img} alt="" />
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-20  top-[50%]">
                    <h1 className='text-white text-3xl font-bold'>
                        Cart Details
                    </h1>
                </div>
            </div>


            <div className="overflow-x-auto w-full my-28">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Product</th>
                            <th>Customer</th>
                            <th>Message</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderDetails
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                                handleUpdate={handleUpdate}
                            ></OrderDetails>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Orders;