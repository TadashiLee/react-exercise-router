import React, {Component} from 'react';
import '../styles/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import MyProfile from './MyProfile';
import AboutUs from './AboutUs';
import Header from './Header';
import Products from './Products';
import Product from './Product';
import Goods from './Goods';
// import '../../../node_modules/';
class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/my-frofile' component={MyProfile}/>
          <Route exact path='/products' component={Products} />
          <Route exact path='/products/:id' component={Product} />
          <Route exact path='/about-us' component={AboutUs} />
          <Route exact path='/goods' component={Goods} />
          <Route path="/" component={Home} />
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
