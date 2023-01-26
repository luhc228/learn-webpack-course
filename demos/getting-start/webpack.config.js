const path = require('path');

/**
 * @type {import('webpack').Configuration}.config
 */
module.exports = (env, argv) => ({
  entry: './src/index.js',
  // mode: argv.mode,
  mode: env.production ? 'production' : 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
});