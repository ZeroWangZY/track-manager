
var path = require('path');
var webpack = require('webpack');


module.exports = {

    entry: [
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname,'public'),
        publicPath: "/",
        filename: "bundle.js"
    },

    module: {

        loaders: [
          // {
          //   test: /\.js$/,
          //   include: /src/,
          //   exclude: /node_modules/,
          //   loader: "react-hot!babel"
          // },
            { test: /\.js$/, loader: 'babel-loader',include: /src/},
            { test: /\.css$/, loader: "style-loader!css-loader"},
            { test: /\.scss$/, loader: "style-loader!css-loader!sass-loader"},
            { test: /\.(jpg|jpeg|png)$/, loader: "url-loader?limit=8192"},
            { test: /\.svg$/, loader: "url-loader?limit=8192"}

        ]


    },
    plugins: process.env.NODE_ENV === 'production' ? [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin()
    ] : []
};
