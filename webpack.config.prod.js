const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: `${path.resolve(__dirname, 'src')}/index.jsx`,
  output: {
    path: `${path.resolve(__dirname, 'public')}/app`,
    filename: 'bundle.js',
    publicPath: '/app',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015', 'env'],
          env: {
            development: {
              plugins: [
                'transform-class-properties',
                'transform-object-rest-spread',
              ],
            },
          },
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
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    historyApiFallback: true,
    hot: true,
    port: 3000,
    compress: true,
    overlay: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
