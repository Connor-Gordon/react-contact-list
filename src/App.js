import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Home from './Home'
import Person from './Person'
import contacts from './randomUsers'



class App extends Component {
  render() {
    return (
      <Router>
        <div className="list">
          <h3>My Peeps</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            {contacts.map(contact => (
              <li key={'contact' + contact.id}><Link to={"/Person/" + contact.id}>{contact.name.first + " " + contact.name.last}</Link></li>
              ))}
          </ul>
          <div className="indvidual">

            
            <Route path="/Person/:id" component={Person} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;








      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>