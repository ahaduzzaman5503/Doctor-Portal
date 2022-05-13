/* import React, { useState } from 'react';
import chair from "../../assets/images/chair.png";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';



const AppointmentBanner = () => {
    const [selected, setSelected] = useState();
    
    let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, 'PP')}.</p>;
  }
    return (
        <div className='container mx-auto'>
            <div className="hero min-h-screen bg-base-200">
              <div className="hero-content flex-between flex-col lg:flex-row-reverse">
                <img src={chair} alt="chair" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <DayPicker>
                    mode="single"
                    selected={selected}
                    onSelect={setSelected}
                    footer={footer}
                </DayPicker>
                </div>
              </div>
            </div>
        </div>
    );
};

export default AppointmentBanner; */

import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from "../../assets/images/chair.png";

export default function Example({dateToDay, setDate}) {
  return (
    <div className='container mx-auto'>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-between flex-col lg:flex-row-reverse">
                <img src={chair} alt="chair" className="max-w-sm rounded-lg shadow-2xl" />
                <div></div>
            <DayPicker
              mode="single"
              selected={dateToDay }
              onSelect={setDate}
            />
       </div>
    </div>
    </div>
  )
}



