import React, { PureComponent, PropTypes } from 'react'

import './styles.sass'

class NameEntry extends PureComponent {

	constructor(props) {
		super(props)

		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		debugger
		this.props.updateAction(event)
	}

	handleEnroll(event) {
		this.props.enrollAction(event)
	}

	handleDropOut(event) {
		this.props.dropOutAction(event)
	}

	render() {
		return (
			<form className="nameEntry">
				<div className="nameInputs">
					<input
						className="textInput"
						type="text"
						name="firstName"
						placeholder={this.props.menu.firstName[this.props.language]}
						value={this.props.profile.firstName}
						onChange={this.handleChange}
					/>
					<input
						className="textInput"
						type="text"
						name="lastName"
						placeholder={this.props.menu.lastName[this.props.language]}
						value={this.props.profile.lastName}
						onChange={this.handleChange}
					/>
				</div>
				<span
					className="enrollButton"
					onClick={this.props.enrollAction}
				>
					{this.props.menu.enroll[this.props.language]}
				</span>
				<span
					className="dropOutButton"
					onClick={this.props.dropOutAction}
				>
					{this.props.menu.dropOut[this.props.language]}
				</span>
			</form>
		)
	}
}

NameEntry.propTypes = {
	updateAction: PropTypes.func,
	enrollAction: PropTypes.func,
	dropOutAction: PropTypes.func,
	profile: PropTypes.object,
	menu: PropTypes.object,
	language: PropTypes.string,
}

export default NameEntry
