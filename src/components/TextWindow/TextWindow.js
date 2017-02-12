import React, { PureComponent, PropTypes } from 'react'

import Dialogue from '../Dialogue/Dialogue'
import NextButton from '../NextButton/NextButton'

import styles from './styles.scss'

class TextWindow extends PureComponent {

	constructor(props) {
		super(props)

		this.state = {
			dialogue: 0
		}

		this.next = this.next.bind(this)
	}

	next() {
		if (this.props.text.length > this.state.dialogue + 1) {
			this.setState({dialogue: this.state.dialogue + 1})
		}
	}

	render() {
		return (
			<div className="textbox" >
				<Dialogue text={this.props.text[this.state.dialogue]} />
				<NextButton action={this.next}/>
			</div>
		)
	}
}

TextWindow.propTypes = {
	text: PropTypes.array,
}

export default TextWindow
