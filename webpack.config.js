const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
	filename: './build/app.js'
    },
    module: {
	rules: [
	    {
		test: /\.js$/,
		loader: 'babel-loader',
		include: path.join(__dirname, 'src'),
		query: {
		    presets: ['react']
		}
	    }
	]
    }
};
