import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointments from './AvailableAppointments';

const Appointment = () => {
    const [dateToDay, setDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner dateToDay={dateToDay} setDate={setDate}></AppointmentBanner>
            <AvailableAppointments dateToDay={dateToDay} ></AvailableAppointments>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;