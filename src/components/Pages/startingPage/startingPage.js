import React from 'react';
// import './startingPage.css';
import startVideo from "./thewheel-got-acard_h1080p.mov";


const StartingPage = () => {

        return (
            <video className='videoTag' autoPlay loop muted controls >
                <source src={startVideo} type='video/mp4' />
            </video> 
        )

}
 
export default StartingPage;