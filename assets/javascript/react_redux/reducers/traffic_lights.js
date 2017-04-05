// ----- Reducers ----- //

function reducer (state = 'GO', action) {

	switch (action.type) {
		case 'CHANGE_LIGHTS':
			return action.stage;
		default:
			return state;
	}

}


// ----- Exports ----- //

export default reducer;
