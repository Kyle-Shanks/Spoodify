const path = require('path')

module.exports = {
  context: __dirname,
  entry: './frontend/spoodify.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '*' ]
  },
  devtool: 'source-map',
};
