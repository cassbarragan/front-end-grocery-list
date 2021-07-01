import React from 'react'
import GroceryList from './GroceryList.jsx'
import GroceryData from '../data/groceriesData.js'

class App extends React.Component {
  constructor(props) {
    super(props); //do we need this in app?
    this.state = {
      name: '',
      quantity: '',
      list: GroceryData
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    // event.persist();
    // console.log(event.target.value);
  }



  handleSubmit(event) {
    var newItem = {
      name: this.state.name,
      quantity: this.state.quantity
    }

    this.setState({
      list: [newItem, ...this.state.list]
    });
    event.preventDefault();
  }

  render () {
    return(
      <div>
        <img src="grocery-bags.png" />
        <h1>Grocery List</h1>
        <form onSubmit={this.handleSubmit}>
          <label> Item
            <input name="name" value={this.state.name} placeholder="item" onChange={this.handleChange}/>
          </label>
          <label> Quantity
            <input name="quantity" value={this.state.quantity} placeholder="qty" onChange={this.handleChange}/>
          </label>
          <button>Add Grocery</button>
          <ul className="groceries">
            <li>
              <GroceryList list={this.state.list}/>
            </li>
          </ul>
        </form>
      </div>
    )}
};

export default App;