import React from 'react'
import GroceryList from './GroceryList.jsx'
import GroceryData from '../data/groceriesData.js'

const App = () => (
  <div>
    <img src="grocery-bags.png" />
    <h1>Grocery List</h1>
    <form>
      <label> Item
        <input name="item" value="" />
      </label>
      <label> Quantity
        <input name="quantity" value="" />
      </label>
      <button>Add Grocery</button>
      <ul className="groceries">
        <li>
          <GroceryList list={GroceryData}/>
        </li>
      </ul>
    </form>
  </div>
);

export default App;