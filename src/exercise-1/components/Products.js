import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Product from './Product';
class Products extends Component {
  render() {
    return (
      <div>
        <p>All Products : </p>
        <div>
        <NavLink exact to='/products/1' className='nav-link'activeStyle={{fontWeight: "bold",color: "red"}}>
          Bicycle
        </NavLink>
        </div>
        <div>
        <NavLink exact to='/products/2' className='nav-link'activeStyle={{fontWeight: "bold",color: "red"}}>
          TV
        </NavLink>
        </div>
        <div>
        <NavLink exact to='/products/3' className='nav-link'activeStyle={{fontWeight: "bold",color: "red"}}>
          Pencile
        </NavLink>
        </div>
        <Route exact path="/products/:id" component={Product} />
      </div>
    );
  }
}

export default Products;