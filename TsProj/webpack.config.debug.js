const path = require('path');

/** 忽略编辑的第三方库 */
const externals = {
	csharp: 'csharp',
	puerts: 'puerts',
};

let local = {
	entry: './src/GameMain.ts',
	devtool: 'inline-source-map',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.txt'],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './output')
	},

	externals
};

let unity = {
	entry: './src/GameMain.ts',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.txt'],
	},
	output: {
		filename: 'bundle.js.txt',
		path: path.resolve(__dirname, '../Assets/Js/Resources')
	},

	externals
};

module.exports = [local, unity];