import React, {Component} from 'react';
import './randomChar.css';
import gotService from '../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';
import PropTypes from "prop-types";

export default class RandomChar extends Component {
     
    gotService = new gotService();
    
    state = {
        char: {},
        loading: true,
        error: false,
        toogler: true
    }

    static defaultProps = {
        interval: 15000
    }

    static propTypes = {
        interval: PropTypes.number
    }


    componentDidMount(){
        this.updateCharacter();
        this.charUpdateTimer = setInterval(this.updateCharacter, this.props.interval);
    }
    
    componentWillUnmount(){
        clearInterval(this.charUpdateTimer);
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateCharacter = () => {
        const id = Math.floor(Math.random()*140 + 30);
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    
    
    render() {
        const {char, loading, error} = this.state;

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner =  loading ? <Spinner/> : null;
        const content = !(loading || error) ? <View char={char}/> : null;

        return (
            <>
                {errorMessage}
                {spinner}
                {content}
            </>
        );
        
    }
}



const View = ({char}) => {

    const {name, gender, born, died, culture, aliases} = char;
    return(
        <div className='random-block'>
            <h4>Random Character: {name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender </span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born </span>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died </span>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture </span>
                    <span>{culture}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Alias</span>
                    <span>{aliases}</span>
                </li>
            </ul>
        </div>
    )
}
