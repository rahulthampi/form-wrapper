const path = require('path');

module.exports = {
  devtool: 'source-map',

  entry: path.resolve(__dirname, 'src', 'index.jsx'),

  output: {
    path: path.resolve(__dirname, 'release'),
    filename: 'form-wrapper.js',
    library: 'FormWrapper',
    libraryTarget: 'umd',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'src'),
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015'],
          plugins: [
            'transform-class-properties',
            'transform-object-rest-spread',
          ],
        },
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
