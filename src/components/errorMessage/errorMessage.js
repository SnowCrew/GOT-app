import React from 'react';
import './errorMessage.css';
import img from './img/error.png'


const ErrorMessage = () => {
    return (
        <>
        <img src={img} alt='error'></img>
        <span className='textError'>Something goes wrong</span>
        </>
        
        )
}

export default ErrorMessage;