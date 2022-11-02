import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import img from '../assets/images/checkout/checkout.png'
import { AuthContext } from '../Context/AuthProvider';

const Checkout = () => {
    const { _id, title, price } = useLoaderData();

    const { user } = useContext(AuthContext)

    const handleOrder = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || "unregistered"
            ;
        const phone = form.phone.value;
        const message = form.message.value;

        ///sending order in database
        const order = {
            service: _id,
            serviceTitle: title,
            price,
            customerName: name,
            email,
            phone,
            message

        }

        fetch(`http://localhost:5000/orders`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('Order placed successfully');
                    form.reset();
                }
            })
    }



    return (
        <div className='w-[80%] mx-auto mt-10 relative'>
            <div className='relative'>
                <img className='w-full' src={img} alt="" />

                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-[45%]  bottom-[-8%] ">
                    <div className='flex text-white h-[50px] px-8  bg-red-600 hover:bg-yellow-500 rounded-t-[50px] '>
                        <p className='mt-[12px]'>Home/</p>
                        <p className='mt-[12px]'>Checkout</p>
                    </div>
                </div>

                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-20  top-[50%]">
                    <h1 className='text-white text-3xl font-bold'>
                        Check Out
                    </h1>
                </div>
            </div>

            <div className='mt-5'>
                <h1 className='text-2xl font-bold'>Your order: {title}</h1>
                <p className='text-lg font-semibold text-red-600'>Price: {price}</p>
            </div>
            {/* //form */}

            <form onSubmit={handleOrder}
                className=' my-32 p-28 bg-gray-200 rounded-xl'>

                <div className='grid grid-cols-2 gap-4'>

                    <input name="firstName" type="text" placeholder="First Name" className="input input-bordered input-primary w-full " />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-bordered input-primary w-full " />
                    <input name="phone" type="text" placeholder="Phone Number" className="input input-bordered input-primary w-full " />
                    <input name="email" type="text" placeholder="Email" defaultValue={user?.email} readOnly className="input input-bordered input-primary w-full " />
                </div>

                <textarea name='message' className="textarea textarea-primary mt-5 w-full h-[150px]" placeholder="Your Message"></textarea>

                <button type='submit' className="btn  bg-red-600 border-0 hover:bg-yellow-500 mt-10 w-full">Order Confirm</button>
            </form>

        </div>
    );
};

export default Checkout;