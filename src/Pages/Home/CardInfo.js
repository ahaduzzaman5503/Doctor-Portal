import React from 'react';

const CardInfo = ({img, cardTitle, subtext, bgClass}) => {
    return (
        <div>
            <div className={`card card-side bg-base-100 shadow-xl h-32 ${bgClass}`}>
                <figure className='pl-5'>
                    <img className='' src={img}  alt="iconImage" />
                </figure>
                <div className="card-body text-white ">
                    <h2 className="card-title">{cardTitle}</h2>
                    <p>{subtext}</p>
                </div>
            </div>
        </div>
    );
};

export default CardInfo;