import React, { Component } from 'react';
import { Redirect } from 'react-router';

class Goods extends Component {
  render() {
    return (
      <Redirect to="/products" />
    );
  }
}

export default Goods;