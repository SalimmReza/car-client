import React, { useEffect, useState, useTransition } from 'react';

const OrderDetails = ({ order, handleDelete, handleUpdate }) => {
    // console.log(order)
    const { _id, customerName, message, price, email, serviceTitle, service, status } = order
    const [serviceDetails, setServiceDetails] = useState({})

    useEffect(() => {
        fetch(`https://y-roan-xi.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setServiceDetails(data))
    }, [service])



    return (

        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-ghost">X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-20 h-20">
                            {
                                serviceDetails?.img &&
                                <img src={serviceDetails.img} alt="Avatar Tailwind CSS Component" />
                            }

                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceTitle}</div>
                        <div className="text-sm text-red-600">{price}</div>
                    </div>
                </div>
            </td>
            <td>
                {customerName}
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>{message}</td>
            <th>
                <button
                    onClick={() => handleUpdate(_id)}
                    className="btn btn-ghost btn-xs lowercase">{
                        status ? status : 'Pending'
                    }</button>
            </th>
        </tr>



    );
};

export default OrderDetails;