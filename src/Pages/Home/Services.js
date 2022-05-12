import React from 'react';
import ServicesInfo from './ServicesInfo';
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";

const Services = () => {
    return (
        <div className='my-20'>
            <h2 className='text-teal-300 font-extrabold'>OUR SERVICES</h2>
            <h2 className='font-medium text-2xl'>Services We Provide</h2>
            <div className='grid gap-5 grid-cols-1 lg:grid-cols-3 container mx-auto p-3'>
                <ServicesInfo serviceDescription="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the" serviceTitle="Fluoride Treatment" serviceImg={fluoride} ></ServicesInfo>
                <ServicesInfo serviceDescription="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the" serviceTitle="Cavity Filling" serviceImg={cavity} ></ServicesInfo>
                <ServicesInfo serviceDescription="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the" serviceTitle="Teeth Whitening" serviceImg={whitening} ></ServicesInfo>
            </div>
        </div>
    );
};

export default Services;