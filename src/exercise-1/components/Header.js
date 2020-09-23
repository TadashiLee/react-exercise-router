import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Header extends Component {
  render() {
    return (
      <nav>
        <NavLink exact to='/' className='nav-link'activeStyle={{fontWeight: "bold",color: "red"}}>
          Home
        </NavLink>
        <NavLink to='/products' className='nav-link' activeStyle={{fontWeight: "bold",color: "red"}}>
          Products
        </NavLink>
        <NavLink exact to='/my-frofile' className='nav-link' activeStyle={{fontWeight: "bold",color: "red"}}>
          My Profile
        </NavLink>
        <NavLink exact to='/about-us' className='nav-link' activeStyle={{fontWeight: "bold",color: "red"}}>
          About Us
        </NavLink>
      </nav>
    );
  }
}

export default Header;