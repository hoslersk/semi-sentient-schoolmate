import React, { PureComponent, PropTypes } from 'react'

class NameEntry extends PureComponent {

	constructor(props) {
		super(props)

		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		this.props.action(event)
	}

	render() {
		return (
			<form className="nameEntry">
				<span>{this.props.menu.header[this.props.language]}</span>
				<br />
				<input
					type="text"
					name="firstName"
					placeholder={this.props.menu.firstName[this.props.language]}
					value={this.props.profile.firstName}
					onChange={this.handleChange}
				/>
				<input
					type="text"
					name="lastName"
					placeholder={this.props.menu.lastName[this.props.language]}
					value={this.props.profile.lastName}
					onChange={this.handleChange}
				/>
			</form>
		)
	}
}

NameEntry.propTypes = {
	action: PropTypes.func,
	profile: PropTypes.object,
	menu: PropTypes.object,
	language: PropTypes.string,
}

export default NameEntry
