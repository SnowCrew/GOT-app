import React, {Component} from 'react';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../services/gotService';
import RowBlock from '../rowBlock';
import {BrowserRouter, Link, Redirect, Route, Router, Switch} from 'react-router-dom';
import './notFoundPage.css';



const NotFoundPage = () => {
    return(
        <div className='notFoundPage'>
            <h1>404 - Not Found!</h1>
            <Link to="/" className='link'>Go Home</Link>
        </div>
    )
}
export default NotFoundPage;