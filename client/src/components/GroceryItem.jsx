import React from 'react';
// import GroceryData from '../data/groceriesData.js'


var GroceryItem = (props) => (
  <div>
    {props.item.name} - {props.item.quantity}
  </div>
)


export default GroceryItem;
