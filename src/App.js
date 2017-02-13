import React, { Component } from 'react';
import logo from './CicadaHusk.jpg';
// import bg from './stairs.jpg'

import BackgroundImage from './components/BackgroundImage/BackgroundImage'
import TextWindow from './components/TextWindow/TextWindow'
import Language from './components/Language/Language'

import { DIALOGUE } from './constants/dialogue'
import { LOCATION } from './constants/location'

import './App.css';

class App extends Component {

	constructor(props) {
		super(props)

		this.state = {
			dialogue: 0,
			language: 'english',
		}

		this.next = this.next.bind(this)
		this.handleLanguage = this.handleLanguage.bind(this)
	}

	next() {
		if (DIALOGUE.intro.length > this.state.dialogue + 1) {
			this.setState({dialogue: this.state.dialogue + 1})
		}
	}

	handleLanguage(event) {
		this.setState({language: event.target.value})
	}

	get dialogue() {
		// Will update with addition of chapters/sections
		return DIALOGUE.intro
	}

	get location() {
		// Will update with addition of chapters/sections
		return LOCATION[DIALOGUE.intro[this.state.dialogue].location]
	}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>{DIALOGUE.title[this.state.language]}</h1>
					<Language action={this.handleLanguage} value={this.state.language} />
        </div>
				<div className="gameScreen" >
					<BackgroundImage source={this.location} />
					<TextWindow
						action={this.next}
						dialogue={this.dialogue}
						step={this.state.dialogue}
						language={this.state.language}
					/>
				</div>
      </div>
    );
  }
}

export default App;


// import React from 'react'
// import { render } from 'react-dom'
// import { Router, browserHistory } from 'react-router'
// import { syncHistoryWithStore } from 'react-router-redux'
// import { Provider } from 'react-redux'
//
// import 'react-toolbox/lib/commons.scss'
// import './root.scss'
//
// import configureStore from './store/store'
// import routes from './routes'
//
// const store = configureStore()
// const history = syncHistoryWithStore(browserHistory, store)
//
//
// localStorage.setItem('initialTarget', window.location.pathname)
//
// render(
// 	<Provider store={store}>
// 		<Router history={history} routes={routes(store)} />
// 	</Provider>,
// 	document.getElementById('app')
// )
