import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const Orders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState({});

    const url = `http://localhost:5000/orders?email=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])
    return (
        <div>
            <h1>orders{orders.length}</h1>
        </div>
    );
};

export default Orders;