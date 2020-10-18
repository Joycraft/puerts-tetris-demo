const path = require('path');

/** 忽略编辑的第三方库 */
const externals = {
	csharp: 'commonjs2 csharp',
	puerts: 'commonjs2 puerts',
};

let local = {
	entry: './src/GameMain.ts',
	devtool: 'source-map',
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

	optimization: {    // 1. 这个配置必须
		minimize: false
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './output')
	},
	externals
};

let unity = {
	entry: './src/GameMain.ts',
	devtool: 'source-map',
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

	optimization: {    // 1. 这个配置必须
		minimize: false
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: 'bundle.js.txt',
		path: path.resolve(__dirname, '../Assets/Js/Resources')
	},
	externals
}

module.exports = [local, unity];