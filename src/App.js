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
          <div id="list">
            <h3 id="h3">My Contacts</h3>

            <ul>
              {contacts.map(contact => (
                <li className="li" key={'contact' + contact.id}>
                  <Link to={"/Person/" + contact.id}><img id="thumbnail" src={contact.picture.thumbnail}/></Link>
                  <span className="idk"><Link to={"/Person/" + contact.id}>{contact.name.first + " " + contact.name.last}</Link></span>
                </li>
                ))}
            </ul>
          </div>
          <div>
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