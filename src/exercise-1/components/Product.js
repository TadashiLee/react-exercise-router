import React, { Component } from 'react';

class Product extends Component {
  state={"bicycle": {
    "id": 1,
    "name": "Bicycle",
    "price": 30,
    "quantity": 15,
    "desc": "Bicycle is Good"
  },
  "TV": {
    "id": 2,
    "name": "TV",
    "price": 40,
    "quantity": 16,
    "desc": "TV is good"
  },
  "pencil": {
    "id": 3,
    "name": "Pencil",
    "price": 50,
    "quantity": 17,
    "desc": "Pencil is good"
  }};
  
  render() {
    const keys = Object.keys(this.state);
    const key = keys[this.props.match.params.id-1];
    return (
      <div>
        <p>Product detail:</p>
        <p>Name: {this.state[key].name}</p>
        <p>Id: {this.state[key].id}</p>
        <p>Price: {this.state[key].price}</p>
        <p>Quantity: {this.state[key].quantity}</p>
        <p>URL: /product/{this.props.match.params.id}</p>
      </div>
    );
  }
}

export default Product;