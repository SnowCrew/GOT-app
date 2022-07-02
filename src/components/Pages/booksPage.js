import React, {Component} from 'react';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../services/gotService';
import RowBlock from '../rowBlock';
import {withRouter} from "react-router-dom";


class BookPage extends Component {

    gotService = new gotService();

    state = { 
        // selectedItem: null,
        error: false
    }

    componentDidCatch(){
            this.setState({
            error: true
        })
    }

    // onItemSelected = (id) => {
    //     this.setState({
    //         selectedItem: id
    //     })
    // }

    render() {

        if(this.state.error) {
            return <ErrorMessage/>
        }

        // const itemList = (
            
        // )

        // const itemDetails = (
        //     <ItemDetails 
        //     itemId={this.state.selectedItem}
        //     getItem={this.gotService.getBook} >
        //         <Field field='numberOfPages' label="NumberOfPages" />
        //         <Field field='publisher' label="Publisher" />
        //         <Field field='released' label="Released" />
        //     </ItemDetails>
        // )

        return (
            // <RowBlock left={itemList} right={itemDetails}  />
            <ItemList 
                onItemSelected={(itemId) => {
                    this.props.history.push(itemId)
                }}
                getData={this.gotService.getAllBooks}
                renderItem={({name}) => `${name}`} />
        )
    }
}  

export default withRouter(BookPage);