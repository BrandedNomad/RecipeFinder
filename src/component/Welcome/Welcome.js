import './Welcome.css';
import React from 'react';

class Welcome extends React.Component{
    render(){
        return(
            <div id="welcomeContainer">
                <div id="welcomeCard">
                    <h1 className='welcomeTitle'>What's for Dinner?</h1>
                    <p className='welcomeInstruction'>Easily find recipes online by entering your favourite ingredients separated by a comma</p>
                </div>
            </div>
        )
    }
}

export default Welcome;