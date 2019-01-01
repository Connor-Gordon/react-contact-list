import React, { Component } from 'react'
import contacts from './randomUsers'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home'

class Person extends Component {
	state = {
		pic: "",
		name: "",
		email: "",
		phone: "",
		cell: "",
		location: ""
	}

	updateContact = (props) => {
			const contact = contacts.find(an => {
			return an.id == props.match.params.id
		})
		this.setState({
			pic: contact.picture.large,
			name: contact.name.first,
			email: contact.email,
			phone: contact.phone,
			cell: contact.cell,
			location: contact.location.city + ", " + contact.location.state
		})
	}

	componentDidMount() {
		this.updateContact(this.props)
	}

	componentWillReceiveProps (newProps) {
		this.updateContact(newProps)
	}


	render () {
		return (
			<div>
			<li><Link to="/">Home</Link></li>
			<h2>Person</h2>
			<img src={this.state.pic}/>
			<h3><img src="https://img.icons8.com/material/24/000000/person-male.png"/>{this.state.name}</h3>
			<p><img src="https://img.icons8.com/material/24/000000/filled-message.png"/>{this.state.email} </p>
			<p><img src="https://img.icons8.com/material/24/000000/cell-phone.png"/>{this.state.cell}</p>
			<p><img src="https://img.icons8.com/material/24/000000/phone-not-being-used.png"/>{this.state.phone}</p>
			<p><img src="https://img.icons8.com/ios-glyphs/24/000000/globe.png"/>{this.state.location}</p>
			</div>
		)
	}
}

export default Person