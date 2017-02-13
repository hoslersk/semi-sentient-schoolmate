import React, { PureComponent, PropTypes } from 'react'

class NextButton extends PureComponent {

	render() {
		return (
			<span className="nextButton" onClick={this.props.action}>Next</span>
		)
	}
}

NextButton.propTypes = {
	action: PropTypes.func,
}

export default NextButton
