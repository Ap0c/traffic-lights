// ----- Imports ----- //

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


// ----- Config ----- //

module.exports = {
    // Individual input files for each page.
    entry: {
    	css: './assets/stylesheets/main.scss',
    	react: './assets/javascript/react/react.js',
    	react_redux: './assets/javascript/react_redux/react_redux.js',
    	react_redux_flow: './assets/javascript/react_redux_flow/react_redux_flow.js'
    },
    // Outputs each input file to the build dir.
    output: {
		filename: '[name].js',
		path: path.join(__dirname, 'build')
    },
    module: {
		rules: [
            // Applies babel with react and flow to all js files.
            // Babel is needed to handle JSX.
            // Flow preset strips out type information for the browser-side js.
		    {
				test: /\.js$/,
				loader: 'babel-loader',
				include: path.join(__dirname, 'assets'),
				query: {
				    presets: ['react', 'flow']
				}
		    },
            // Compiles SASS, and strips the CSS out into a separate file.
		    {
		    	test: /\.scss$/,
		    	loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
		    }
		]
    },
    // Tells webpack to use preact in place of react.
    resolve: {
    	alias: {
    		'react': 'preact-compat',
    		'react-dom': 'preact-compat'
    	}
    },
    // This is what pulls the CSS out into its own file.
    // Will generate a random, empty css.js file.
    plugins: [
    	new ExtractTextPlugin({
    		filename: 'main.css',
    		allChunks: true
    	})
    ]
};
