const path = require('path');

module.exports = {
  entry: {
    camera_move: './src/camera_move.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist', 'js'),
  },
  devServer: {
      contentBase: path.resolve(__dirname, 'dist')
  }
};