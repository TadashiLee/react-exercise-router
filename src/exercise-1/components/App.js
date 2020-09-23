import React, {Component} from 'react';
import '../styles/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import MyProfile from './MyProfile';
import AboutUs from './AboutUs';
import Header from './Header';
// import '../../../node_modules/';
class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/my-frofile' component={MyProfile}/>
          <Route exact path='/about-us' component={AboutUs} />
          <Route path="/" component={Home} />
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
