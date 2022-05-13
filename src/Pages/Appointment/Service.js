import React from 'react';

const Service = ({service, setTreatment}) => {
    const {name, slots} = service;
    return (
        <div>
            <div className="hero  bg-white">
                <div className="hero-content text-center">
                    <div className="lg:max-w-lg shadow-2xl rounded-b-lg p-4 border-gray-400 bg-white">
                        <h1 className="text-4xl  text-blue-500 font-bold">{name}</h1>
                        <p className="py-5">{
                        slots.length > 0
                        ? 
                        <span>{slots[0]}</span>
                        : <span className='text-red-500'>No Slot Available</span>
                        }</p>
                        <p className="pb-5"> <span>{slots.length} Space</span> Try Next Day</p>
                        <label htmlFor="booking-modal" onClick={()=> setTreatment(service)}  disabled={slots.length===0}  className="btn btn-primary text-white">Book Appointment</label>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;