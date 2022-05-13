import React from 'react';
import "./Home.css";
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import DentalCare from './DentalCare';
import Appointment from './Appointment';
import TestomoInfo from './TestomoInfo';
import Form from './Form';
import Footer from '../Shared/Footer';
 
const Home = () => {
    return (
            <div className='container mx-auto my-10'>
                <Banner></Banner>
                <Info></Info>
                <Services></Services>
                <DentalCare></DentalCare>
                <Appointment></Appointment>
                <TestomoInfo></TestomoInfo>
                <Form></Form>
                <Footer></Footer>
            </div>
    );
};

export default Home;  