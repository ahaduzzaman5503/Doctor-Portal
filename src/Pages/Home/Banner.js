import React from 'react';
import "./Banner.css";
import chair from "../../assets/images/chair.png";
import backgroundChire from "../../assets/images/bg.png";


const Banner = () => {
    return (
        <div className='homeBgImage'
                style={{
                    backgroundImage: `url(${backgroundChire})`  
             }}>
            <div className="hero min-h-screen bg-light-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='chair'/>
    <div className='text-left'>
      <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
      <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
      <button className="btn btn-primary text-white h-24 bg-gradient-to-r from-teal-400 to-blue-500 btnCustom">Get Started</button>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Banner;