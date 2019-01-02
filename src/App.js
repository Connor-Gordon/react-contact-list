import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Home from './Home'
import Person from './Person'
import contacts from './randomUsers'
import './list.css'
import './indivdual.css'


class App extends Component {
  render() {
    return (
      <Router>
        <div id="container">
            <Route exact path="/" component={Home} />
            <Route path="/Person/:id" component={Person} />
        </div>
      </Router>
    );
  }
}

export default App;




