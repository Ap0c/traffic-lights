// ----- Imports ----- //

const path = require('path');
const express = require('express');


// ----- Setup ----- //

const app = express();
app.use('/static', express.static('build'));


// ----- Routes ----- //

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'pages/index.html'));
});

app.get('/react', (req, res) => {
	res.sendFile(path.join(__dirname, 'pages/react.html'));
});

app.get('/react-redux', (req, res) => {
	res.sendFile(path.join(__dirname, 'pages/react_redux.html'));
});

app.get('/react-redux-flow', (req, res) => {
	res.sendFile(path.join(__dirname, 'pages/react_redux_flow.html'));
});

app.get('/react-redux-immutable', (req, res) => {
	res.send('Coming soon...');
});


// ----- Run ----- //

app.listen(3000, () => {
	console.log('Running... Go to http://localhost:3000');
});
