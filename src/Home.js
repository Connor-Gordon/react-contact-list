import React, { Component } from 'react'
import App from "./App"
import Person from './Person'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import contacts from './randomUsers'



class Home extends Component {
	render () {
		return (
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
		)
	}
}

export default Home