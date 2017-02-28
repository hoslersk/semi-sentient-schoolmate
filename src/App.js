import React, { Component } from 'react';
import logo from './CicadaHusk.jpg';

import BackgroundImage from './components/BackgroundImage/BackgroundImage'
import TextWindow from './components/TextWindow/TextWindow'
import Language from './components/Language/Language'
import NameEntry from './components/NameEntry/NameEntry'
import Character from './components/Character/Character'

import { MENU } from './constants/menu'
import { DIALOGUE } from './constants/dialogue'
import { LOCATION } from './constants/location'
import { CHARACTER } from './constants/character'

import './App.css';

class App extends Component {

	constructor(props) {
		super(props)
		const initialState =  {
			profile: {
				firstName: '',
				lastName: '',
			},
			progressCode: '',
			dialogue: 0,
			language: 'english',
		}

		this.state = JSON.parse(localStorage.getItem('semisen')) || initialState

		this.next = this.next.bind(this)
		this.handleLanguage = this.handleLanguage.bind(this)
		this.handleProfile = this.handleProfile.bind(this)
		this.enroll = this.enroll.bind(this)
		this.dropOut = this.dropOut.bind(this)
	}

	componentDidMount() {
		this.refs.audio.play()
	}

	next() {
		if (DIALOGUE.intro.length > this.state.dialogue + 1) {
			this.setState({dialogue: this.state.dialogue + 1})
		}
	}

	handleLanguage(event) {
		this.setState({ language: event.target.value })
	}

	handleProfile(event) {
		// can be abstracted more later
		if (event.target.name === 'firstName') {
			this.setState({ profile: { firstName: event.target.value, lastName: this.state.profile.lastName } })
		}

		if (event.target.name === 'lastName') {
			this.setState({ profile: { lastName: event.target.value, firstName: this.state.profile.firstName } })
		}
	}

	enroll() {
		localStorage.setItem('semisen', JSON.stringify(this.state))
	}

	dropOut() {
		const initialState =  {
			profile: {
				firstName: '',
				lastName: '',
			},
			progressCode: '',
			dialogue: 0,
			language: 'english',
		}
		this.setState(initialState)
		localStorage.setItem('semisen', JSON.stringify(this.state))
	}

	get dialogue() {
		// Will update with addition of chapters/sections
		return DIALOGUE.intro
	}

	get location() {
		// Will update with addition of chapters/sections
		return LOCATION[DIALOGUE.intro[this.state.dialogue].location]
	}

	characterImage(character, i) {
		return 	<Character key={i ? i : 0} data={character} />
	}

	get characters() {
		// Will update with addition of chapters/sections
		if (DIALOGUE.intro[this.state.dialogue].hasOwnProperty('character')) {

			if (Array.isArray(DIALOGUE.intro[this.state.dialogue].character)) {
				return DIALOGUE.intro[this.state.dialogue].character.map((char, i) => this.characterImage(char, i))
			}

			return this.characterImage(DIALOGUE.intro[this.state.dialogue].character)
		}

		return null
	}

	get effect() {
		if (DIALOGUE.intro[this.state.dialogue].hasOwnProperty('effect')) {
			return <span className={DIALOGUE.intro[this.state.dialogue].effect} />
		}

		return null
	}

	render() {
		return (
			<div className="App">
				<div className={`${this.state.language}AppHeader`}>
					{/* <Language action={this.handleLanguage} value={this.state.language} /> */}
					<NameEntry
						profile={this.state.profile}
						updateAction={this.handleProfile}
						enrollAction={this.enroll}
						dropOutAction={this.dropOut}
						menu={MENU.nameEntry}
						language={this.state.language}
					/>

					<h1 className="headline">{MENU.title[this.state.language]}</h1>

					<audio ref="audio" className="audio" loop>
						<source
							src="https://ia902205.us.archive.org/26/items/BeethovenSymphonyNo.7_807/02_Beethoven_Sym_No.7_m2.ogg"
							type="audio/ogg"
						/>
						<source
							src="https://ia802205.us.archive.org/26/items/BeethovenSymphonyNo.7_807/02_Beethoven_Sym_No.7_m2.mp3"
							type="audio/mpeg"
						/>
					</audio>
					</div>

				{this.effect}

				<div className="gameScreen" >
					<BackgroundImage source={this.location} />

					{this.characters}

					<TextWindow
						action={this.next}
						dialogue={this.dialogue}
						step={this.state.dialogue}
						language={this.state.language}
						profile={this.state.profile}
						end={DIALOGUE.intro.length === this.state.dialogue + 1}
					/>
				</div>

			</div>
		);
	}
}

export default App;
