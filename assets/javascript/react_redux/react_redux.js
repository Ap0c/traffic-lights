// ----- Imports ----- //

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import TrafficLight from './components/TrafficLight';
import Buttons from './components/Buttons';
import reducer from './reducers/traffic_lights';


// ----- App ----- //

function App () {

	return (
		<div className="main-wrapper">
			<TrafficLight />
			<Buttons />
		</div>
	);

}


// ----- Run ----- //

const store = createStore(reducer);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);
