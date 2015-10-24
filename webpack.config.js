var path = require('path');
var webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    path.resolve(__dirname, 'app/scripts/main.jsx')
  ],
  output: {
    path: './app',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      exclude: /(node_modules|bower-components)/,
      loaders: ['react-hot', 'babel']
      //query: {stage: 0}
    }, {
      test: /\.json$/,
      exclude: /(node_modules|bower-components)/,
      loader: 'json'
    }, {
      test: /\.css$/,
      loaders: ['style', 'css?modules']
    }, {
      test: /\.(gif|jpg|jpeg|png|svg)$/,
      loaders: ['url?limit=25000', 'image-webpack']
    }]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
}
