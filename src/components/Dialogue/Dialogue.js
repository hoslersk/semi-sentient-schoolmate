import React, { PureComponent, PropTypes } from 'react'

class Dialogue extends PureComponent {

	render() {
		return (
			<div className="dialogue" >
				{this.props.text}
			</div>
		)
	}
}

Dialogue.propTypes = {
	text: PropTypes.string,
}

export default Dialogue
