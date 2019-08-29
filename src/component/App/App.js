import React from 'react';
import './App.css';
import ListView from "../ListView/ListView"
import RecipeAPI from '../../url/RecipeAPI';
import SearchBar from "../SearchBar/SearchBar";








class App extends React.Component {
    constructor(props){
        super(props)
        this.state={
            recipeList:[],

        }

        this.searchRecipes = this.searchRecipes.bind(this)
        this.handleSearch =  this.handleSearch.bind(this)
    }

    //Calls the RecipeAPI function
    //@param takes in the ingredient as a search query
    //@return a list of recipes that is added to the app's state
    searchRecipes(ingredient){
        RecipeAPI.search(ingredient).then( (List)=>{
            this.setState({
                recipeList:List
            })
        });
    }


    //Calls the searchRecipe function when user clicks on submit
    //@param takes searchBars state.ingredient as a paramater
    handleSearch(ingredient){
        this.searchRecipes(ingredient);
    }

    render(){

    return(
        <div id="app">
            <SearchBar handleSearch={this.handleSearch}/>
            <ListView dataItemList={this.state.recipeList} />
        </div>
    )
  }
}

export default App;
