// ----- Imports ----- //

import React from 'react';
import { render } from 'react-dom';


// ----- Components ----- //

function TrafficLight (props) {

	return (
		<figure className="traffic-light">
			<div className="traffic-light__light">Red</div>
			<div className="traffic-light__light">Orange</div>
			<div className="traffic-light__light">Green</div>
		</figure>
	);

}


// ----- Render ----- //

render(<TrafficLight />, document.getElementById('app'));
