import React, { PureComponent, PropTypes } from 'react'

import Dialogue from '../Dialogue/Dialogue'
import NextButton from '../NextButton/NextButton'
import Speaker from '../Speaker/Speaker'

import styles from './styles.scss'

class TextWindow extends PureComponent {

	get formatDialogue() {
		const dialogueText = this.props.dialogue[this.props.step].text[this.props.language]
		const nameInsert = this.props.profile.firstName === '' ? '' : this.props.firstName
		if (dialogueText.includes('%FIRST-NAME-END%')) {
			return dialogueText.replace('%FIRST-NAME-END%', `, ${nameInsert}`)
		}
		if (dialogueText.includes('%FIRST-NAME%')) {
			return dialogueText.replace('%FIRST-NAME%', nameInsert)
		}
		// if (dialogueText.includes('%LAST-NAME-END%')) {
		// 	return dialogueText.replace('%LAST-NAME-END%', `, ${this.props.profile.lastName}`)
		// }
		// if (dialogueText.includes('%LAST-NAME%')) {
		// 	return dialogueText.replace('%LAST-NAME%', this.props.profile.lastName)
		// }
	}

	get speaker() {
		if (this.props.dialogue[this.props.step].hasOwnProperty('speaker')) {
			return <Speaker text={this.props.dialogue[this.props.step].speaker[this.props.language]} />
		}

		return null
	}

	get updatedText() {
		if (this.props.profile.firstName !== '') {
			return this.props.dialogue[this.props.step].text[this.props.language].replace(
				'Stranger', this.props.profile.firstName
			)
		}

		return this.props.dialogue[this.props.step].text[this.props.language]
	}

	render() {
		return (
			<div className="textboxContainer">
				{this.speaker}
				<div className="textbox">
					<Dialogue text={this.updatedText} />
					<NextButton action={this.props.action} />
				</div>
			</div>
		)
	}
}

TextWindow.propTypes = {
	action: PropTypes.func,
	dialogue: PropTypes.array,
	step: PropTypes.number,
	language: PropTypes.string,
	profile: PropTypes.object,
}

export default TextWindow
