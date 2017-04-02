// ----- Imports ----- //

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


// ----- Config ----- //

module.exports = {
    entry: ['./assets/javascript/index.js', './assets/stylesheets/main.scss'],
    output: {
		filename: './build/app.js'
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
    		filename: './build/main.css',
    		allChunks: true
    	})
    ]
};
