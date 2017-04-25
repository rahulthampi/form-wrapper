const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const findFolders = srcPath => fs.readdirSync(srcPath)
  .filter(file => fs.statSync(path.join(srcPath, file)).isDirectory())
  .reduce((entries, directory) => {
    const entryPoints = entries;
    entryPoints[directory] = path.resolve(__dirname, directory, 'app.jsx');
    return entryPoints;
  }, {});
console.log(findFolders(__dirname));

module.exports = {
  devtool: 'inline-source-map',

  entry: findFolders(__dirname),

  output: {
    path: path.resolve(__dirname, '__build__'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/__build__/',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          /src/,
          /examples/,
        ],
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015'],
          plugins: [
            'transform-class-properties',
            'transform-object-rest-spread',
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
    port: 3000,
    compress: true,
    overlay: true,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    // new BundleAnalyzerPlugin(),
  ],
};
