var webpack = require('webpack');

module.exports =  {

	entry:"./src/main.js",
	output:{
		path:"./dist",
		filename:"bundle.js",
		publicPath:"/"
	},
	devtool:'cheap-module-source-map',
	devServer:{
		inline:true,
		contentBase:'./dist',
		port:7000
	},
	plugins: [
	  new webpack.DefinePlugin({
		'process.env': {
		  'NODE_ENV': JSON.stringify('production')
		}
	  })
	],
	module:{
		
		loaders:[
			{
				test   :/\.jsx?$/,
				exclude:/(node_modules|bower_components)/,
				loader :'babel',
				query  :{
					presets:['react','es2015']
				}
			}
		]
	}
}