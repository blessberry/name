import path from 'path';
import { merge } from 'webpack-merge';
import config from './webpack.config.js';

export default merge(config, {
   mode: 'development',
   entry: [
    './src/UI/js/index.js',
    'webpack-hot-middleware/client'
   ],
   output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
   devtool: 'inline-source-map',
   devServer: {
     contentBase: './dist',
     stats: 'errors-only'
   },
 });
