const path = require('path');

/**
 * @type {import('webpack').Configuration}.config
 */
module.exports = (env, argv) => ({
  entry: './src/index.js',
  // mode: argv.mode,
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{ loader: path.resolve(__dirname, "loaders/a.js") }],
      },
    ],
  },
});