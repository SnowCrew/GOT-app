import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import './app.css';
import ErrorMessage from '../errorMessage';
import { CharacterPage, BookPage, HousePage, BooksItem, NotFoundPage, StartingPage } from '../Pages';
import gotService from '../services/gotService';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
export default class App extends Component {

    gotService = new gotService();

    state = {
        showRandomChar: true,
        error: false
    };

    componentDidCatch() {
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



    render() {
        const char = this.state.showRandomChar ? <RandomChar interval={15000} /> : null;

        if (this.state.error) {
            return <ErrorMessage />
        }

        return (
            <BrowserRouter>
                <div className='app'>
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{ size: 5, offset: 0 }}>
                                {char}
                                <button
                                    className='gradient-button'
                                    onClick={this.toogleRandomChar}>Toggle random character panel</button>
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

};


