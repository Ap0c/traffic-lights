// ----- Imports ----- //

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';


// ----- Setup ----- //

const SELECTED_LIGHT = 'traffic-light__light--selected';
const BUTTONS_STATES = {
	go: 'GO',
	stop: 'STOP',
	going: 'GOING',
	stopping: 'STOPPING'
};


// ----- Functions ----- //

function lightClasses (lightStage) {

	switch (lightStage) {

		case ('GO'):
			return { red: '', amber: '', green: SELECTED_LIGHT };
		case ('STOP'):
			return { red: SELECTED_LIGHT, amber: '', green: '' };
		case ('GOING'):
			return { red: SELECTED_LIGHT, amber: SELECTED_LIGHT, green: '' };
		case ('STOPPING'):
			return { red: '', amber: SELECTED_LIGHT, green: '' };
		default:
			return {};

	}

}


// ----- Actions ----- //

function changeLights (stage) {
	return { type: 'CHANGE_LIGHTS', stage: stage };
}


// ----- Reducers ----- //

function reducer (state = 'GO', action) {

	switch (action.type) {
		case 'CHANGE_LIGHTS':
			return action.stage;
		default:
			return state;
	}

}


// ----- Components ----- //

function TrafficLightComponent ({ stage }) {

	let classes = lightClasses(stage);

	return (
		<figure className="traffic-light">
			<div className={`traffic-light__light ${classes.red}`}></div>
			<div className={`traffic-light__light ${classes.amber}`}></div>
			<div className={`traffic-light__light ${classes.green}`}></div>
		</figure>
	);

}

function ButtonsComponent ({ dispatch }) {

	const buttonData = [
		{ text: 'Go', stage: 'GO' },
		{ text: 'Stopping', stage: 'STOPPING' },
		{ text: 'Stop', stage: 'STOP' },
		{ text: 'Going', stage: 'GOING' }
	];

	const buttons = buttonData.map(data => {

		const attrs = {
			className: 'buttons__button',
			key: data.stage,
			onClick: () => dispatch(changeLights(data.stage))
		};

		return <button {...attrs}>{data.text}</button>;

	});

	return <div className="buttons">{buttons}</div>;

}


// ----- App ----- //

const TrafficLight = connect(state => ({ stage: state }))(TrafficLightComponent);
const Buttons = connect()(ButtonsComponent);

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
