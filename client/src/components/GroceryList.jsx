import React from 'react'
import GroceryItem from './GroceryItem.jsx'

var GroceryList = (props) => (
  <div>

    {props.list.map((element, index) => <GroceryItem item={element} key={index}/>)}
  </div>
)

export default GroceryList
