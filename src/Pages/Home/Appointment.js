import React from 'react';
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";

const Appointment = () => {
    return (
        <div className='flex items-center justify-center '
        style={{
            background: `url(${appointment})`
        }}>
            <div className='flex-1 hidden lg:block '>
                <img className='mt-[-120px]' src={doctor} alt="appointmetn"/>
            </div>

            <div className='flex-1'>
                <div className='text-left text-white'>
                    <h4 className='text-teal-300'>Appointment</h4>
                    <h2 className='text-2xl my-2'>Make an appointment Today</h2>
                    <p className='my-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary text-white h-24 bg-gradient-to-r from-teal-400 to-blue-500 btnCustom my-3">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Appointment;