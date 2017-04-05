// ----- Imports ----- //

import React from 'react';
import { connect } from 'react-redux';


// ----- Setup ----- //

const SELECTED_LIGHT = 'traffic-light__light--selected';


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


// ----- Component ----- //

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


// ----- Map State/Props ----- //

function mapStateToProps (state) {
	return { stage: state };
}


// ----- Exports ----- //

export default connect(mapStateToProps)(TrafficLightComponent);
