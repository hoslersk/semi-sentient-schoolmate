import React, { PureComponent, PropTypes } from 'react'

import Character from '../Character/Character'
import TextWindow from '../TextWindow/TextWindow'
import BackgroundImage from '../BackgroundImage/BackgroundImage'

import { DIALOGUE } from '../../constants/dialogue'
import { LOCATION } from '../../constants/location'

import './styles.sass'

class GameScreen extends PureComponent {

	characterImage(character, i) {
		return 	<Character key={i ? i : 0} data={character} />
	}

	get characters() {
		// Will update with addition of chapters/sections
		if (DIALOGUE.intro[this.props.step].hasOwnProperty('character')) {

			if (Array.isArray(DIALOGUE.intro[this.props.step].character)) {
				return DIALOGUE.intro[this.props.step].character.map((char, i) => this.characterImage(char, i))
			}

			return this.characterImage(DIALOGUE.intro[this.props.step].character)
		}

		return null
	}

	get dialogue() {
		// Will update with addition of chapters/sections
		return DIALOGUE.intro
	}

	get location() {
		// Will update with addition of chapters/sections
		return LOCATION[DIALOGUE.intro[this.props.step].location]
	}

	next() {
		if (DIALOGUE.intro.length > this.props.step + 1) {
			this.setState({dialogue: this.props.step + 1})
		}
	}

	render() {

		return (
			<div className="gameScreen" >
				<BackgroundImage source={this.location} />

				{this.characters}

				<TextWindow
					action={this.props.next}
					dialogue={this.dialogue}
					step={this.props.step}
					language={this.props.language}
					profile={this.props.profile}
					end={DIALOGUE.intro.length === this.props.step + 1}
				/>
			</div>
		)
	}
}

// GameScreen.propTypes = {
// 	text: PropTypes.string,
// 	quotes: PropTypes.bool,
// }

export default GameScreen
