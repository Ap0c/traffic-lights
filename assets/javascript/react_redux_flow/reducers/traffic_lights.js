// @flow

// ----- Reducers ----- //

function reducer (state: string = 'GO', action: Object) {

	switch (action.type) {
		case 'CHANGE_LIGHTS':
			return action.stage;
		default:
			return state;
	}

}


// ----- Exports ----- //

export default reducer;
