const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',

  entry: `${path.resolve(__dirname, 'user')}/app.jsx`,

  output: {
    path: `${path.resolve(__dirname, '__build__')}`,
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/__build__/',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015'],
          plugins: [
            'transform-class-properties',
            'transform-object-rest-spread',
            "add-module-exports",
          ],
        },
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
    ],
  },

  resolve: {
    extensions: ['.scss', '.js', '.jsx'],
    alias: {
      'form-wrapper': '../../src/index',
    },
  },

  devServer: {
    contentBase: path.resolve(__dirname),
    historyApiFallback: true,
    hot: true,
    port: 3030,
    compress: true,
    overlay: true,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
  ],
};
