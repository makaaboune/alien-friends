import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {searchAliens, requestAliens} from './reducers';
import './index.css';
import 'tachyons';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
//Provider => Component taht pass store to all the components tree
const logger = createLogger();
const rootReducer = combineReducers({searchAliens, requestAliens})
const store = createStore(rootReducer,applyMiddleware(thunkMiddleware, logger));
ReactDOM.render(
	<Provider store={store}>
		      <App />
	</Provider>
, document.getElementById('alien_root'));
registerServiceWorker();
