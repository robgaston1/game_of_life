import React from 'react';
import ReactDOM from 'react-dom';
import Game from './containers/Game';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<Game/>
	</Provider>,
	document.getElementById('app')
	);
