import React, { PureComponent, PropTypes } from 'react'

import './styles.sass'

class Dialogue extends PureComponent {

	render() {
		if (this.props.quotes) {
			return (
				<div className="dialogue" >
					{`"${this.props.text}"`}
				</div>
			)
		}

		return (
			<div className="dialogue" >
				{this.props.text}
			</div>
		)
	}
}

Dialogue.propTypes = {
	text: PropTypes.string,
	quotes: PropTypes.bool,
}

export default Dialogue
