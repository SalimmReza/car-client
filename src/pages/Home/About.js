import React from 'react';
import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className='my-32 '>
            <div className="hero h-[500px] bg-base-200 rounded-xl">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='relative w-1/2'>
                        <img src={person} alt='' className=" rounded-lg shadow-2xl w-4/5 h-full " />
                        <img src={parts} alt='' className="rounded-lg shadow-2xl w-3/5 absolute right-5 top-1/2 border-8" />
                    </div>
                    <div className='w-1/2 flex flex-col items-start'>
                        <p className='font-bold text-red-500 '>About us</p>
                        <h1 className="text-5xl font-bold text-justify">We are qualified <br />& of experience<br />in this field</h1>
                        <p className="py-6 text-justify">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <p className="py-6 text-justify">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <button className="btn bg-red-500 hover:bg-orange-400 border-0 hover:text-black">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;