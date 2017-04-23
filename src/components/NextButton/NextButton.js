import React, { PureComponent, PropTypes } from 'react'

import './styles.sass'

class NextButton extends PureComponent {

	render() {
		return (
			<span className="nextButton" onClick={this.props.action}>
				{this.props.text}
			</span>
		)
	}
}

NextButton.propTypes = {
	action: PropTypes.func,
	text: PropTypes.string,
}

export default NextButton
