import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import webpack from 'webpack';

export default {
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
        title: 'index',
    })
  ],
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
        cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
            },
          },
    }
  },
  module: {
      rules:[{
        test: /\.css$/,
        use: [
        'style-loader',
        'css-loader',
         ],
      },{
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader',{
            loader: 'image-webpack-loader',
            options: {
                disable: true,
                mozjpeg: {
                progressive: true,
                quality: 65
                },
                // optipng.enabled: false will disable optipng
                optipng: {
                enabled: false,
                },
                pngquant: {
                quality: [0.65, 0.90],
                speed: 4
                },
                gifsicle: {
                interlaced: false,
                },
                // the webp option will enable WEBP
                webp: {
                quality: 75
                }
            }
        }],
      },{
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader',],
      }]
  }
};
