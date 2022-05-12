import React from 'react';
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Testomonial from './Testomonial';
import quote from "../../assets/icons/quote.svg";

const TestomoInfo = () => {
    return (

        <div >
            <div className='flex justify-between items-center '>
            <div className='items-start ml-10 '>
                <h2 className='text-green-500 text-2xl'>Testimonial</h2>
                <h2  className='text-xl' >What Our Patients Says</h2>
             </div>

             <div className='items-end'>
                 <img className='w-24 lg:w-48 mr-10' src={quote} alt="quote"/>
             </div>
            </div>

        <div className='flex gap-5 py-10'>
            <Testomonial peopleImg={people1} name={"Winson Herry"} state={'Calofornia'} ></Testomonial>
            <Testomonial peopleImg={people2} name={"Elena Jerry"} state={'Albama'} ></Testomonial>
            <Testomonial peopleImg={people3} name={"Arnold Jone"} state={'New York'} ></Testomonial>
        </div>
        </div>
    );
};

export default TestomoInfo;