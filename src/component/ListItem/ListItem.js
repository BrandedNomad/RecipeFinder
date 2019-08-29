import React from 'react'
import './ListItem.css'
import wifi_icon from './wifi_icon.png'

class ListItem extends React.Component{
    render(){

        return(
            <a className='recipeLink' href={this.props.itemData.recipe_url} target='_blank'>
                <div className="listItemContainer">
                    <div className="listItemColumnTwo">
                        <img className='recipeImage' src={this.props.itemData.image} alt='icon' />
                    </div>
                    <div className="listItemColumnOne">
                        <h1 className="title">{this.props.itemData.title}</h1>
                        <h2 className="description">Get Recipe!</h2>
                    </div>
                </div>
            </a>

        )
    }
}

export default ListItem;