import React from 'react';
import './index.css';
import {Link} from "react-router-dom";
import Monkey from '../../images/monkey.png'

function IntroScreen() {
    return (
        <div className="intro-screen">
            <div className='text-bg'>
                <h3 className='heading'>Welcome Kiddo!</h3>
            </div>
            <div className='monkey-container'>
                <img className='monkey' src={Monkey} alt='monkey-png' />
            </div>
            <Link to="/instruction-screen" className='link-start'>
                <div className='start-button'></div>
            </Link>
        </div>
    )
}

export default IntroScreen;