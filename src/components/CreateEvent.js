import React, { useState } from 'react'
import DateTimePicker from 'react-datetime-picker';
import { Link } from 'react-router-dom';

function CreateEvent() {
 const [eventData, setEventData] = useState({dateTime: new Date()});

const handleChange = (event) =>{
    setEventData({...eventData,[event.target.name]:event.target.value});
}


const handleDateTimeChange = (val) =>{
    setEventData({...eventData, dateTime : val});
}

  return (
    <div className='bg-grey-light'>
        <div className='container card text-center pb-5 pl-0 pr-0'>
            <div className="card bg-dark text-white">
                <img src="https://cdn.pixabay.com/photo/2017/12/08/11/53/event-party-3005668__340.jpg" className="card-img" alt="..."/>
            </div>
            <h1 className='text-envited-purple mt-4'>Plan your event</h1>
            <div className='col-8 offset-2 text-left'>
                <form>
                    <div className="form-group">
                        <label htmlFor="event-name">Event Name</label>
                        <input type="text" onChange={handleChange} name="eventName" className="form-control" id="event-name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="host-name">Host Name</label>
                        <input type="text" onChange={handleChange} name="hostName" className="form-control" id="host-name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="date-time">Event Date</label>
                        <DateTimePicker  id="date-time" name="dateTime" onChange={handleDateTimeChange} value={eventData.dateTime} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Event Location</label>
                        <textarea className="form-control" id="location" name="location" onChange={handleChange} rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="event-photo">Event Photo</label>
                        <input type="file" onChange={handleChange} name="eventPic" className="form-control-file" id="event-photo"/>
                    </div>
                    <div className='text-center mt-5'>
                        <Link to={eventData ? '/event' : '#'} state={{data:eventData}} type="submit" className="btn-envited-purple text-white text-decoration-none border-0 btn-create-evt">Next</Link>
                    </div>
                </form>
            </div>

        </div>
    </div>  
  )
}

export default CreateEvent
