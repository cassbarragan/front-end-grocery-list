import React from 'react'
import GroceryItem from './GroceryItem.jsx'


var GroceryList = (props) => (

    <div>
{console.log(props.list)}
      <GroceryItem item={props.list.map()}/>
    </div>
)

export default GroceryList