// ----- Imports ----- //

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


// ----- Config ----- //

module.exports = {
    entry: {
    	css: './assets/stylesheets/main.scss',
    	react: './assets/javascript/react/react.js',
    	react_redux: './assets/javascript/react_redux/react_redux.js'
    },
    output: {
		filename: '[name].js',
		path: path.join(__dirname, 'build')
    },
    module: {
		rules: [
		    {
				test: /\.js$/,
				loader: 'babel-loader',
				include: path.join(__dirname, 'assets'),
				query: {
				    presets: ['react']
				}
		    },
		    {
		    	test: /\.scss$/,
		    	loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
		    }
		]
    },
    plugins: [
    	new ExtractTextPlugin({
    		filename: 'main.css',
    		allChunks: true
    	})
    ]
};
