import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const ServiceItem = ({ service }) => {
    console.log(service)
    const { _id, img, price, title } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='h-[220px] w-full'
                src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-left text-red-500 font-semibold'>Price $ {price}</p>
                <div className="card-actions justify-end text-red-600">
                    <Link to={`/checkout/${_id}`}>
                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;