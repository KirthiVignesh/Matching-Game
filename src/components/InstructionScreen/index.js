import React from 'react';
import './index.css';
import {Link} from "react-router-dom";


function InstructionScreen () {
    return (
        <div className='instruction-screen'>
            <Link to='/' className='back-link'>
                <div className='back-button'></div>
            </Link>
            <div className='card-instructions'>
                <div className='cards'>
                    <div className='card-1-bg'>
                        <img className='card-1' src={require('..\\..\\..\\public\\card-1.png')} alt='card-1'/>
                    </div>
                    <div>
                        <h2 className='card-text'>Select a</h2>
                        <h2 className='card-text'>pink card</h2>
                        <h4 className='text'>It has images.</h4>
                    </div>
                </div>
                <div className='cards'>
                    <div className='card-2-bg'>
                    </div>
                    <div>
                        <h2 className='card-text'>Select a</h2>
                        <h2 className='card-text'>blue card</h2>
                        <h4 className='text'>It has alphabets.</h4>
                    </div>
                </div>
                <div className='cards'>
                    <div className='card-3-bg'>
                        <img src={require('..\\public\\card-3.png')} alt='card-3' />
                    </div>
                    <div>
                        <h2 className='text'>If they're same</h2>
                        <h2 className='card-text'>Its a match !</h2>
                        <h4 className='text'>otherwise retry :(</h4>
                    </div>
                </div>
            </div>
            <Link to="/activity-screen" className='play-link'>
                <div className='play-button'></div>
            </Link>
        </div>
    )
}

export default InstructionScreen;