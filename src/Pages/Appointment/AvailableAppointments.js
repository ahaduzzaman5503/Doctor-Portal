import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({dateToDay}) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    return (
        <div className='container mx-auto'>
            <div>
                <h2 className='text-4xl font-bold py-5 text-primary text-center'>Available Appointments: <span className='text-green-500 '> {format(dateToDay, 'PP')}</span></h2>
            </div>                
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 bg-white'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal 
            dateToDay={dateToDay}
            treatment={treatment}  
            setTreatment={setTreatment}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;