import React, { Component } from 'react'
import logo from './CicadaHusk.jpg'

import AppHeader from './components/AppHeader/AppHeader'
import GameScreen from './components/GameScreen/GameScreen'
import Effects from './components/Effects/Effects'
import VRTest from './components/VRTest'

import { DIALOGUE } from './constants/dialogue'

import './App.sass'

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

	get effects() {
		if (DIALOGUE.intro[this.state.dialogue].hasOwnProperty('effect')) {
			return <Effects type={DIALOGUE.intro[this.state.dialogue].effect} />
		}

		return null
	}

	render() {

		if (DIALOGUE.intro[this.state.dialogue].hasOwnProperty('vr')) {
			return (
				<div className="AppVR">
					<div className={`${this.state.language}AppHeader${this.state.dialogue > 0 ? 'Hidden' : ''}`}>
						<VRTest />
					</div>
				</div>
			)
		}

		return (
			<div className="App">
				<AppHeader
					language={this.state.language}
					profile={this.state.profile}
					dialogue={this.state.dialogue}
					updateAction={this.handleProfile}
					enrollAction={this.enroll}
					dropOutAction={this.dropOut}
				/>

				{this.effects}

				<GameScreen
					next={this.next}
					step={this.state.dialogue}
					language={this.state.language}
					profile={this.state.profile}
				/>
			</div>
		);
	}
}

export default App;
