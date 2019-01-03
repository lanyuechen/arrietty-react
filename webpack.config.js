const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");    //提取css到单独文件
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");    //解决MiniCssExtractPlugin导致的重复问题

module.exports = (env, argv) => {
  if (argv.mode !== 'production') {   //非开发或生产环境,分析用
    //plugins.push(new BundleAnalyzerPlugin());
  }

  return {
    mode: argv.mode || 'development',
    entry: {
      index: './example/index.js'
    },
    output: {
      filename: 'js/bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    devServer: {
      contentBase: './example',
      host: '0.0.0.0',
      historyApiFallback: true
    },
    //optimization: {
    //  minimizer: [
    //    new OptimizeCSSAssetsPlugin({})
    //  ]
    //},
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: 'example/index.html'
      }),
      new MiniCssExtractPlugin({
        filename: "css/style.css",
        chunkFilename: "[id].css"
      })
    ],
    externals: {
      "react": "React",
      "react-dom": "ReactDOM"
    },
    resolve: {
      extensions: ['.js'],
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader'
          },
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader'
          ]
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'images/[name].[ext]'
              }
            }
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'fonts/[name].[ext]'
              }
            }
          ]
        }
      ]
    }
  };
};
