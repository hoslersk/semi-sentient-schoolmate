import React, { Component } from 'react';
import logo from './CicadaHusk.jpg';
import bg from './stairs.jpg'

import BackgroundImage from './components/BackgroundImage/BackgroundImage'
import TextWindow from './components/TextWindow/TextWindow'

import { TEXT } from './constants/text'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
					<h3>蝉・センティエント・スクールメート</h3>
          <h2>Semi-Sentient Schoolmate</h2>
        </div>
				<div className="gameScreen" >
					<BackgroundImage source={bg} />
					<TextWindow text={TEXT.intro} />
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
