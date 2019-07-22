import path from 'path';
import webpack from 'webpack';
import slsw from 'serverless-webpack';

const config: webpack.Configuration = {
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  entry: slsw.lib.entries,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
  target: 'node',
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
  },
};

module.exports = config;
