import React, { PureComponent, PropTypes } from 'react'

import './styles.sass'

class Speaker extends PureComponent {

	get text() {
		if (this.props.name) {
			return this.props.name
		}

		return this.props.text
	}

	render() {

		return (
			<div className="speaker" >
				{this.text}
			</div>
		)
	}
}

Speaker.propTypes = {
	name: PropTypes.string,
	text: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array,
	]),
}

export default Speaker
