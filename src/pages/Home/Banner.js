import React from 'react';
import img5 from '../../assets/images/banner/5.jpg'
import img4 from '../../assets/images/banner/4.jpg'
import img3 from '../../assets/images/banner/3.jpg'
import img2 from '../../assets/images/banner/2.jpg'
import './Banner.css'


const Banner = () => {
    return (
        <div>
            <div className="carousel w-full ">
                <div id="slide1" className="carousel-item relative w-full h-[600px]">
                    <div className='carousel-img w-full'>
                        <img src={img5} className="w-full rounded-xl h-[600px] bg-cover" alt='' />
                    </div>

                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5  top-[25%]">
                        <h1 className='text-white text-6xl font-bold'>
                            Affordable <br /> Price For Car <br /> Servicing
                        </h1>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5  top-[50%]">
                        <p className='text-white text-lg font-semibold'>
                            There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form
                        </p>
                    </div>

                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5  top-[75%]">
                        <button className="btn btn-warning">Discover More</button>
                        <button className="btn btn-outline btn-secondary text-black">Latest Project</button>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle hover:bg-orange-500 ">❮</a>
                        <a href="#slide2" className="btn btn-circle hover:bg-orange-500 ">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className='carousel-img w-full h-[600px]'>
                        <img src={img4} className="w-full rounded-xl h-[600px] bg-cover" alt='' />
                    </div>

                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5  top-[25%]">
                        <h1 className='text-white text-6xl font-bold'>
                            Affordable <br /> Price For Car <br /> Servicing
                        </h1>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5  top-[50%]">
                        <p className='text-white text-lg font-semibold'>
                            There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form
                        </p>
                    </div>

                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5  top-[75%]">
                        <button className="btn btn-warning">Discover More</button>
                        <button className="btn btn-outline btn-secondary text-black">Latest Project</button>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle hover:bg-orange-500 ">❮</a>
                        <a href="#slide3" className="btn btn-circle hover:bg-orange-500 ">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className='carousel-img w-full h-[600px]'>
                        <img src={img3} className="w-full rounded-xl h-[600px] bg-cover" alt='' />
                    </div>

                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5  top-[25%]">
                        <h1 className='text-white text-6xl font-bold'>
                            Affordable <br /> Price For Car <br /> Servicing
                        </h1>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5  top-[50%]">
                        <p className='text-white text-lg font-semibold'>
                            There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form
                        </p>
                    </div>

                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5  top-[75%]">
                        <button className="btn btn-warning">Discover More</button>
                        <button className="btn btn-outline btn-secondary text-black">Latest Project</button>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle hover:bg-orange-500 ">❮</a>
                        <a href="#slide4" className="btn btn-circle hover:bg-orange-500 ">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className='carousel-img w-full h-[600px]'>
                        <img src={img2} className="w-full rounded-xl h-[600px] bg-cover" alt='' />
                    </div>

                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5  top-[25%]">
                        <h1 className='text-white text-6xl font-bold'>
                            Affordable <br /> Price For Car <br /> Servicing
                        </h1>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5  top-[50%]">
                        <p className='text-white text-lg font-semibold'>
                            There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form
                        </p>
                    </div>

                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5  top-[75%]">
                        <button className="btn btn-warning">Discover More</button>
                        <button className="btn btn-outline btn-secondary text-black">Latest Project</button>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle hover:bg-orange-500 ">❮</a>
                        <a href="#slide1" className="btn btn-circle hover:bg-orange-500 ">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;