<<<<<<< HEAD
import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
=======
import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
>>>>>>> master
import Header from '../header';
import RandomChar from '../randomChar';
import './app.css';
import ErrorMessage from '../errorMessage';
<<<<<<< HEAD
import { CharacterPage, BookPage, HousePage, BooksItem,NotFoundPage, StartingPage } from '../Pages';
import gotService from '../services/gotService';
import {BrowserRouter, Route, Router, Switch, Link} from 'react-router-dom';
=======
import { CharacterPage, BookPage, HousePage, BooksItem, NotFoundPage, StartingPage } from '../Pages';
import gotService from '../services/gotService';
import { BrowserRouter, Route, Router, Switch, Link } from 'react-router-dom';
>>>>>>> master





export default class App extends Component {

    gotService = new gotService();

    state = {
        showRandomChar: true,
        error: false
    };

<<<<<<< HEAD
    componentDidCatch(){
=======
    componentDidCatch() {
>>>>>>> master
        this.setState({
            error: true
        })
    }

    toogleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        });
    };

<<<<<<< HEAD
    
=======

>>>>>>> master

    render() {
        const char = this.state.showRandomChar ? <RandomChar interval={15000} /> : null;

<<<<<<< HEAD
        if(this.state.error) {
            return <ErrorMessage/>
        }
    
        return (
            <BrowserRouter>
                <div className='app'> 
=======
        if (this.state.error) {
            return <ErrorMessage />
        }

        return (
            <BrowserRouter>
                <div className='app'>
>>>>>>> master
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
<<<<<<< HEAD
                            <Col lg={{size: 5, offset: 0}}>
=======
                            <Col lg={{ size: 5, offset: 0 }}>
>>>>>>> master
                                {char}
                                <button
                                    className='gradient-button'
                                    onClick={this.toogleRandomChar}>Toggle random character panel</button>
<<<<<<< HEAD
                            </Col>
                            </Row>
                        <Switch>
                            <Route path='/' exact component={() => (
                            <></>
                            )} />
                            <Route path='/characters' component={CharacterPage}/>
                            <Route path='/houses' component={HousePage}/>
                            <Route path='/books' exact component={BookPage}/>
                            <Route path='/books/:id' render={
                                ({match}) => {
                                const {id} = match.params;
                                return <BooksItem bookId={id}/>}
                            }/>
                            <Route path='/startingPage' exact component={StartingPage}/>
                            <Route component={NotFoundPage}/>
                        </Switch>
                    </Container>
                    
                </div>
                
            </BrowserRouter>
        );
    }
    
=======

                            </Col>
                            <Col>

                            </Col>
                        </Row>
                        <Switch>
                            <Route path='/' exact component={() => (
                                <></>
                            )} />
                            <Route path='/characters' component={CharacterPage} />
                            <Route path='/houses' component={HousePage} />
                            <Route path='/books' exact component={BookPage} />
                            <Route path='/books/:id' render={
                                ({ match }) => {
                                    const { id } = match.params;
                                    return <BooksItem bookId={id} />
                                }
                            } />
                            <Route path='/startingPage' exact component={StartingPage} />

                            <Route component={NotFoundPage} />
                        </Switch>
                    </Container>

                </div>

            </BrowserRouter>
        );
    }

>>>>>>> master
};


