import React from 'react';
import About from './About';
import Banner from './Banner';
import Services from './services/Services';

const Home = () => {
    return (
        <div className='w-[80%] mx-auto my-10 '>
            <Banner></Banner>
            <About></About>
            <Services></Services>

        </div>
    );
};

export default Home;