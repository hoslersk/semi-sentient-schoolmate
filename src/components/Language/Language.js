import React, { PureComponent, PropTypes } from 'react'

class Language extends PureComponent {

	constructor(props) {
		super(props)

		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		this.props.action(event)
	}

	render() {

		return (
			<form className="languageOptions">
				<div className="languageOption">
					<input
						type="radio"
						label="English"
						name="language"
						value="english"
						onChange={this.handleChange}
						checked={this.props.value === 'english'}
					/>
					<label>English</label>
				</div>
				<div className="languageOption">
					<input
						type="radio"
						label="Japanese"
						name="language"
						value="japanese"
						onChange={this.handleChange}
						checked={this.props.value === 'japanese'}
					/>
					<label>日本語</label>
				</div>
			</form>
		)
	}
}

Language.propTypes = {
	action: PropTypes.func,
	value: PropTypes.string,
}

export default Language
