import React, { useEffect, useState } from 'react';
import ServiceItem from './ServiceItem';


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://y-roan-xi.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div >
            <div className='text-center'>
                <p className='font-bold text-red-500 mb-4'>Services</p>
                <h1 className='text-5xl font-bold mb-3'>Our Services</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>

            <div className='grid grid-cols-3 gap-5 mt-8'>
                {
                    services.map(service => <ServiceItem
                        key={service._id}
                        service={service}
                    ></ServiceItem>)
                }
            </div>

            <button className="btn btn-outline btn-secondary mt-10">More Services</button>

        </div>
    );
};

export default Services;