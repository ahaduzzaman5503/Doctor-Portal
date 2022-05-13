import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({treatment, dateToDay, setTreatment}) => {
    const { _id, name, slots} = treatment;

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log( 'id',_id, 'Name',name, 'Time', slot);
        setTreatment(null);
      
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle text-center">
  <div className="modal-box">
    <h3 className="font-bold text-primary text-lg">Booking for: {name} </h3>
    <br/>
        <form onSubmit={handleBooking} >
          <input type="text"  value={format(dateToDay, 'PP')} className="input input-bordered text-2xl text-center input-accent w-full max-w-xs" />
          <select className="select select-bordered w-full max-w-xs">
          {
              slots.map(slot => <option 
                key={slot._id}
                slot={slot}
                >{slot}
              </option>)
          }
          </select>
          <br/> <br/>
          <input type="text" name='name' placeholder="Full Name" className="input input-bordered input-accent w-full max-w-xs" />
          <br/> <br/>
          <input type="number" name='phone' placeholder="Phone Number" className="input input-bordered input-accent w-full max-w-xs" />
          <br/> <br/>
          <input type="email" name='email' placeholder="Email" className="input input-bordered input-accent w-full max-w-xs" />
          <br/> <br/>
          <input type="submit" value="Submit" className="btn w-full max-w-xs text-white bg-green-700 " />
        </form>
    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

    <div className="modal-action">
    </div>
  </div>
</div>
        </div>
    );
};

export default BookingModal;