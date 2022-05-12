import React from 'react';

const ServicesInfo = ({serviceImg, serviceTitle, serviceDescription}) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={serviceImg} alt="serviceImg" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{serviceTitle}</h2>
                    <p>{serviceDescription}</p>
                </div>
            </div>
        </div>
    );
};

export default ServicesInfo;