import React from 'react'
import { useLocation } from "react-router-dom";
import { FaCalendarAlt } from 'react-icons/fa';
import { FaMapMarker } from 'react-icons/fa';



function Event() {
  const location = useLocation();
  const eventData = location.state?.data; 
    
  return (
      eventData && (
        <div className='container-fluid event-container vh-100'>        
            <div className='container h-100'>
                <div className='row d-flex align-items-center h-100'>
                <div className='col-md-6 col-sm-12'>
                        <h1 className='text-purple-dark event-name'>{eventData.eventName}</h1> 
                        <p className='text-grey event-hostName'>Hosted by <span>{eventData.hostName}</span></p> 
                        
                        <div className='d-flex align-items-center mb-4 mt-5'>
                            <div className="card p-2">
                                <FaCalendarAlt className='icon text-envited-purple' />
                            </div>
                            <div className='pl-2'>
                                <p className='prop-val mb-0'>{eventData.dateTime}</p>
                            </div>
                        </div> 

                        <div className='d-flex align-items-center'>
                            <div className="card p-2">
                                <FaMapMarker className='icon text-envited-purple' />
                            </div>
                            <div className='pl-2'>
                                <p className='prop-val mb-0'>Street Name</p>
                                <p className='event-val mb-0'>{eventData.location}</p>
                            </div>
                        </div>
                </div>
                <div className='col-md-6 col-sm-12'>
                    <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d6299f-f287-469c-a403-b8ab9d75aa62/Birthday_cake.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220925%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220925T074118Z&X-Amz-Expires=86400&X-Amz-Signature=fe07cbfd543daf2778b3bb593f7bc2d0ed7a852a171d8a63d9fc853367586514&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Birthday%2520cake.png%22&x-id=GetObject" className="img-thumbnail" alt="..."/>
                </div>
                </div>
            </div>
        </div>
    )
  )
}

export default Event
