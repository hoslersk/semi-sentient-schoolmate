import React, { PureComponent, PropTypes } from 'react'

import Dialogue from '../Dialogue/Dialogue'
import NextButton from '../NextButton/NextButton'

import styles from './styles.scss'

class TextWindow extends PureComponent {

	render() {
		return (
			<div className="textbox" >
				<Dialogue text={this.props.dialogue[this.props.step].text[this.props.language]} />
				<NextButton action={this.props.action} />
			</div>
		)
	}
}

TextWindow.propTypes = {
	action: PropTypes.func,
	dialogue: PropTypes.array,
	step: PropTypes.number,
	language: PropTypes.string,
}

export default TextWindow
