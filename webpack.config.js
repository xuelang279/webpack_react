var webpack = require('webpack');
var path = require('path');

module.exports = {
	devtool: 'eval-source-map',
    entry:  [
            'webpack/hot/only-dev-server',
            __dirname + '/app/main.js'
        ],
    output: {
        path: __dirname + '/build/',
        filename: 'bundle.js',
    },
    module: {
        //加载器配置
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },

            {
                test: /\.js$/,
                loader: 'jsx-loader?harmony'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            },
            {
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.js|jsx$/,
                loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=react,presets[]=stage-0'],
                include: path.join(__dirname, 'js')
			}
        ]
    },
	//其它解决方案配置
    resolve: {
        extensions: ['', '.js', '.json', '.scss']
    },
	//插件项
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
	devServer: {
        contentBase: './build',
        colors: true,
        historyApiFallback: true,
        inline: true,
        port: 8080,
        process: true
    }
};