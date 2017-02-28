import React, { PureComponent, PropTypes } from 'react'

class Speaker extends PureComponent {

	render() {
		
		return (
			<div className="speaker" >
				{this.props.text}
			</div>
		)
	}
}

Speaker.propTypes = {
	text: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array,
	]),
}

export default Speaker
