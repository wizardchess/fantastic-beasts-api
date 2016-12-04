const webpack = require('webpack');
const path = require('path');

//Directory path of the bundle file output
const BUILD_DIR = path.resolve(__dirname, './public');
//APP_DIR holds the directory path of the React application's codebase
const APP_DIR = path.resolve(__dirname, './client');

const config = {
	entry: APP_DIR + '/index.jsx',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	}
};

module.exports = config;