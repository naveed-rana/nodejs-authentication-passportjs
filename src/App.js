import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Home from './component/Home';
import Signup from './component/signup';
import Login from './component/login';
import Dashbord from './component/Dashboard';
import {BrowserRouter as Router,Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
          <Route exact path="/dashboard" component={Dashbord} />
         
      </div>
      </Router>
    );
  }
}

export default App;
