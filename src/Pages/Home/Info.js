import React from 'react';
import CardInfo from './CardInfo';
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";


const Info = () => {
    return (
        <div className='grid gap-5 grid-cols-1 lg:grid-cols-3 '>
            <CardInfo bgclassName="bg-gradient-to-r from-teal-400 to-blue-500" cardTitle="Opening Hours" subtext="Lorem Ipsum is simply dummy text of the pri" img={clock}></CardInfo>
            <CardInfo bgclassName="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500" cardTitle="Visit Our Location" subtext="Brooklyn, NY 10036, United States" img={marker}></CardInfo>
            <CardInfo bgclassName="bg-gradient-to-r from-teal-400 to-blue-500" cardTitle="Contact Us Now" subtext="+000 123 456789" img={phone}></CardInfo>
        </div>
    );
}
export default Info;