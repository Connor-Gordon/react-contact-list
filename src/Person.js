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
			name: contact.name.first + " " + contact.name.last,
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
			<div id="individual">
				<div id="picDiv">
				<Link to="/"><img id="backButton" src="https://img.icons8.com/material/24/000000/circled-chevron-left.png"/></Link>
					<img id="contactPic" src={this.state.pic}/>
				</div>
				<ul id="infoList">
					<li className="contactInfo"><img className="icons" src="https://img.icons8.com/material/24/000000/person-male.png"/>    {this.state.name}</li>
					<li className="contactInfo"><img className="icons" src="https://img.icons8.com/material/24/000000/filled-message.png"/>    {this.state.email} </li>
					<li className="contactInfo"><img className="icons" src="https://img.icons8.com/material/24/000000/cell-phone.png"/>    {this.state.cell}</li>
					<li className="contactInfo"><img className="icons" src="https://img.icons8.com/material/24/000000/phone-not-being-used.png"/>  {this.state.phone}</li>
					<li className="contactInfo"><img className="icons" src="https://img.icons8.com/ios-glyphs/24/000000/globe.png"/>    {this.state.location}</li>
				</ul>	
			</div>
		)
	}
}

export default Person