import React, {Component} from 'react';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../services/gotService';
import RowBlock from '../rowBlock';


export default class HousePage extends Component {

    gotService = new gotService();

    state = { 
        selectedItem: null,
        error: false
    }

    componentDidCatch(){
            this.setState({
            error: true
        })
    }

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        })
    }

    render() {

        if(this.state.error) {
            return <ErrorMessage/>
        }

        const itemList = (
            <ItemList 
                itemListOf={"houses"}
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllHouses}
                renderItem={({name, region}) => `${name} (${region})`} />
        )

        const itemDetails = (
            <ItemDetails 
            itemId={this.state.selectedItem}
            getItem={this.gotService.getHouse} >
                <Field field='region' label="Region" />
                <Field field='words' label="Words" />
                <Field field='titles' label="Titles" />
                <Field field='overlord' label="Overlord" />
                <Field field='ancestralWeapons' label="AncestralWeapons" />
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetails}  />
        )
    }
}  