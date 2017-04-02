// ----- Imports ----- //

import React from 'react';
import { render } from 'react-dom';


// ----- Setup ----- //

const SELECTED_LIGHT = 'traffic-light__light--selected';


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

	}

}


// ----- Components ----- //

function TrafficLight (props) {

	let classes = lightClasses(props.state);

	return (
		<figure className="traffic-light">
			<div className={`traffic-light__light ${classes.red}`}></div>
			<div className={`traffic-light__light ${classes.red}`}></div>
			<div className={`traffic-light__light ${classes.green}`}></div>
		</figure>
	);

}


// ----- Render ----- //

render(<TrafficLight state="GO" />, document.getElementById('app'));
