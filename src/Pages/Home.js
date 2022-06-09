import React from 'react';
import './Home.css'
import Navbar from './Navbar';
import pic from '../Image/04.png'
const Home = () => {
    return (
        <div className='banner px-20'>
            <Navbar />
            <div className='grid grid-cols-2 mt-5 px-40'>
                <div className='m-5 mx-auto'>
                    <div className='mt-10'>
                        <p className='text-5xl leading-[60px] font-bold'>Hi! I'm</p>
                        <p className='text-5xl leading-[60px] font-bold'>Fahim Madani.</p>
                        <p className='text-5xl leading-[60px] font-bold mb-6'>Web Developer.</p>
                        <button className='btn border-0 bg-primary'>Download Resume</button>
                    </div>
                </div>
                <div className='w-60 mx-auto'>
                    <img src={pic} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;