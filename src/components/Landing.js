import React from 'react'
import {Container, col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <Container className="bg-secondary-purple-3 vh-100" fluid>
        <div className='row align-items-center h-100'>
            <div className='col-3 offset-2'>
                <div className="card border-0 shadow landing-card">
                    <img className='img-fluid' src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220925%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220925T074033Z&X-Amz-Expires=86400&X-Amz-Signature=157497ce488beb0300e684355979eecc7fad743272b1d583567fb0c3e46c6117&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject"  alt="..."/>
                </div>
            </div>
            <div className='col-5 offset-1 landing-right-section'>
                <div className='text-right'>
                    <h1 className='text-purple-dark'>
                        Imagine if <br/>
                        <span className='gradient-text-purple'>Snapchat</span> <br/>
                        had events.
                    </h1>
                    <p className='text-grey sub-title'>Easily host and share events with your friends across any social media.</p>
                    <Link className='btn-create-evt text-center text-white text-decoration-none btn-gradient border-0' to={"/create"} type="button">🎉 Create my event</Link>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Landing
