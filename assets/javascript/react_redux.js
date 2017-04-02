// ----- Imports ----- //

import React from 'react';
import { render } from 'react-dom';


// ----- Setup ----- //

const SELECTED_LIGHT = 'traffic-light__light--selected';
const BUTTONS_STATES = {
	go: 'GO',
	stop: 'STOP',
	going: 'GOING',
	stopping: 'STOPPING'
};


// ----- Functions ----- //

function lightClasses (lightState) {

	switch (lightState) {

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


// ----- Components ----- //

function TrafficLight (props) {

	let classes = lightClasses(props.stage);

	return (
		<figure className="traffic-light">
			<div className={`traffic-light__light ${classes.red}`}></div>
			<div className={`traffic-light__light ${classes.amber}`}></div>
			<div className={`traffic-light__light ${classes.green}`}></div>
		</figure>
	);

}

function Buttons (props) {

	const buttonData = [
		{ text: 'Go', value: 'go' },
		{ text: 'Stopping', value: 'stopping' },
		{ text: 'Stop', value: 'stop' },
		{ text: 'Going', value: 'going' }
	];

	const buttons = buttonData.map(data => {

		const attrs = {
			className: 'buttons__button',
			key: data.value,
			onClick: () => props.onClick(data.value)
		};

		return <button {...attrs}>{data.text}</button>;

	});

	return <div className="buttons">{buttons}</div>;

}

class App extends React.Component {

	constructor (props) {
		super(props);
		this.state = { stage: props.stage };
		this.handleButtonClick = this.handleButtonClick.bind(this);
	}

	handleButtonClick (button) {
		this.setState({ stage: BUTTONS_STATES[button] });
	}

	render () {
		return (
			<div className="main-wrapper">
				<TrafficLight stage={this.state.stage} />
				<Buttons onClick={this.handleButtonClick} />
			</div>
		);
	}

}


// ----- Render ----- //

render(<App stage="GO" />, document.getElementById('app'));
