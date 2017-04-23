import React, { PureComponent, PropTypes } from 'react'

import './styles.sass'

class Dialogue extends PureComponent {

	render() {
		if (this.props.quotes) {
			const openQuote = this.props.language === 'japanese' ? '「' : '"'
			const endQuote = this.props.language === 'japanese' ? '」' : '"'
			return (
				<div className="dialogue" >
					{`${openQuote}${this.props.text}${endQuote}`}
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
	language: PropTypes.string,
}

export default Dialogue
