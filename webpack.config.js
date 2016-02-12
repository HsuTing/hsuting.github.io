var path = require('path');
var webpack = require('webpack');

var jsx_src = './src';
var jsx_dist = './dist';
var lib_src = './node_modules';

module.exports = {
    entry: {
        'index': path.resolve(jsx_src, 'index.jsx'),
        'common': [
            path.resolve(lib_src, 'react/react.js'),
            path.resolve(lib_src, 'react-dom/index.js')
        ]
    },
    output: {
        filename: '[name].min.js',
        path: jsx_dist
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'babel',
                query: {
                  presets: ['es2015', 'react' ]
                } 
            },
            { test: /\.css$/, loader: 'style-loader!css-loader' }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common', 'common.min.js'),
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]
}
