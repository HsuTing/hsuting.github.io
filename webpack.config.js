var path = require('path');
var webpack = require('webpack');

var jsx_src = './src';
var jsx_dist = './dist';

module.exports = {
    entry: {
        "index": path.resolve(jsx_src, 'index.jsx')
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
                  presets: ['es2015' ]
                } 
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common', 'common.min.js')
    ]
}
