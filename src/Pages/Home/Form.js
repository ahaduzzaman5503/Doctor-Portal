import React from 'react';
import bgappointment from "../../assets/images/appointment.png";

const Form = () => {
    return (
        <div className=' container mx-auto'>
            <div className='py-10 rounded-t-lg text-center mx-auto'
             style={{
                backgroundImage: `url(${bgappointment})`  
         }}>

                    <h1 className='text-blue-500 text-2xl'>Contact Us</h1>
                    <h2 className='text-white text-xl'>Stay connected with us</h2>
                    <br/>
                <input type="email" placeholder="Email Address" className="input input-bordered input-success w-full max-w-xs" />
                    <br/> <br/>
                <input type="text" placeholder="Subject" className="input input-bordered input-success w-full max-w-xs" />
                <br/> <br/>
                <textarea className="textarea textarea-info w-full max-w-xs" placeholder="Enter Your Massage"></textarea>
                <br/> <br/>
                <input type="submit" value="Submit" className="btn btn-primary text-white h-24 bg-gradient-to-r from-teal-400 to-blue-500 btnCustom my-3" />
            </div>
        </div>

    );
};

export default Form;