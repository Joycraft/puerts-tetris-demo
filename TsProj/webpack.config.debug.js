const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

/** 忽略编辑的第三方库 */
const externals = {
	csharp: 'commonjs2 csharp',
	puerts: 'commonjs2 puerts',
};

module.exports = {
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

	plugins: [
		new CopyWebpackPlugin({
			patterns: [
				{
					from: './output/bundle.js',
					to: '../Assets/Js/Resources/bundle.js.txt',
					force: true,
				},
			]
		})
	],
	externals
};