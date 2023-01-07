const path = require('path');

/**
 * @type {import('webpack').Configuration}.config
 */
module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};