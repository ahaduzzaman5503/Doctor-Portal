import React from 'react';
import Tretment from "../../assets/images/treatment.png";
import "./DentalCare.css";

const DentalCare = () => {
    return (
        <div className='mb-[150px] '>
            <div className="card card-side gap-10 bg-base-100 shadow-xl dentalCustom">
                <div className='dentalImg'>
                <figure>
                    <img src={Tretment} alt="Movie"/>
                </figure>
                </div>
            <div className="card-body">
                <h2 className="card-title text-left ">Exceptional Dental Care, on Your Terms</h2>
                <p className='text-green-500 text-left'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <div className="card-actions justify-start">
                    <button className="btn btn-primary uppercase ">Get Started</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default DentalCare;