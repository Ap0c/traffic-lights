// @flow

// ----- Imports ----- //

import React from 'react';
import { connect } from 'react-redux';
import { changeLights } from '../actions/traffic_lights';


// ----- Components ----- //

function Buttons ({ dispatch }) {

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

// ----- Exports ----- //

export default connect()(Buttons);
