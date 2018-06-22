var path = require("path"); // bunch of utilities that comes with node that works with file directory
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require("webpack"); // for uglify & node_env

var config = {
    entry: "./app/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'), 
        filename: "index_bundle.js",
        publicPath: '/'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
            // css-loader changes url(..) to require(..)
            // style-loader takes css and insert it into the page
        ]
    },
    devServer: {
        // enable ReactRouter to take care of refresh
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ],
    mode: process.env.NODE_ENV === "production" ? "production" : "development"
};

// if(process.env.NODE_ENV === 'production'){ // for setting node_env to production
//     config.plugins.push(
//         new webpack.DefinePlugin({
//             'process.env': {
//                 'NODE_ENV': JSON.stringify(process.env.NODE_ENV) // for compiled code
//             }
//         }),
//         new webpack.optimize.minimize()
//     )
// }

module.exports = config;

// env => go ahead and transpile to the latest js
// react => change to react.createElement invocation
// html-webpack-plugin
// creates default HTML file and put it into 'dist' file