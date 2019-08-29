import React from 'react';
import './ListView.css';
import ListItem from '../ListItem/ListItem'




class ListView extends React.Component{


    list(){
        if(Array.isArray(this.props.dataItemList)){
            return this.props.dataItemList.map((d,i)=>{
                return <ListItem className="listItem" itemData={d} key={d.title + i}/>
            });
        }


    }

    render(){


        var listToDisplay = this.list();

        return(
            <div id="listViewContainer">
                <ul id="listView">
                    {listToDisplay}
                </ul>
            </div>



        )
    }
}

export default ListView;