import React from 'react';
import './index.css';
import {Link} from "react-router-dom";
import card1 from "../../images/card-1.png"
import card3 from "../../images/card-3.png"


function InstructionScreen () {
    return (
        <div className='instruction-screen'>
            <Link to='/' className='back-link'>
                <div className='back-button'></div>
            </Link>
            <div className='card-instructions'>
                <div className='cards'>
                    <div className='card-1-bg'>
                        <img className='card-1' src={card1} alt='card-1'/>
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
                        <img src={card3} alt='card-3' />
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