import "./SearchBar.css"
import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            search:'',
            ingredient:''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this)
    }

    //Udates the state.ingredient when user clicks submit and then calls the handleSearch function with
    //the state.ingredient as a parameter
    handleSubmit(e){
        var ingredient = this.state.search;
        this.setState({
            ingredient: ingredient
        },()=>{this.props.handleSearch(this.state.ingredient)});

        e.preventDefault();
    }

    //updates the SearchBar state.search with the users search query when user types.
    //@param takes in the event Object (onChange)
    handleOnChange(e){
        this.setState({
            search:e.target.value
        });
    }

    render(){
        return(
            <div id="searchBarContainer">
                <form onSubmit={this.handleSubmit}>
                    <input id="searchField" type='text' onChange={this.handleOnChange} placeholder='Enter an ingredient'/>
                    <button id="searchButton" type='submit'>GO</button>
                </form>
            </div>
        )
    }

}

export default SearchBar;