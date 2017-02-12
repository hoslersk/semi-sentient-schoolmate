import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { Router, browserHistory } from 'react-router'
// import { Provider } from 'react-redux'
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

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
