 import path from 'path';
 import { merge } from 'webpack-merge';
 import config from './webpack.config.js';

 export default merge(config, {
   entry: {
     index: './src/UI/js/index.js'
   },
   output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
   mode: 'production',
   devtool: 'source-map'
 });
