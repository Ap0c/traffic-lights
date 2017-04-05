// ----- Imports ----- //

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


// ----- Config ----- //

module.exports = {
    entry: {
    	css: './assets/stylesheets/main.scss',
    	react: './assets/javascript/react/react.js',
    	react_redux: './assets/javascript/react_redux/react_redux.js',
    	preact_redux: './assets/javascript/preact_redux/preact_redux.js',
    	react_redux_flow: './assets/javascript/react_redux_flow/react_redux_flow.js'
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
				    presets: ['react', 'flow']
				}
		    },
		    {
		    	test: /\.scss$/,
		    	loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
		    }
		]
    },
    resolve: {
    	alias: {
    		'react': 'preact-compat',
    		'react-dom': 'preact-compat'
    	}
    },
    plugins: [
    	new ExtractTextPlugin({
    		filename: 'main.css',
    		allChunks: true
    	})
    ]
};
