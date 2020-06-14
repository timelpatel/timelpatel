const webpack = require('webpack')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const copyPlugin = require('copy-webpack-plugin')
const APP_DIR = path.resolve(__dirname, 'src')
const BUILD_DIR = path.resolve(__dirname, 'dist')

const config = {
  devServer: {
    contentBase: BUILD_DIR,
    inline: true,
    port: 3000,
    watchContentBase: true,
  },
  entry: APP_DIR + '/app.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    rules: [
      {
        include: APP_DIR,
        exclude: /(node_modules)/,
        test: /\.jsx?/,
        use: 'babel-loader',
      },
      {
        test : /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              // importLoaders: 1,
              // localIdentName: '[sha1:hash:hex:4]',
            },
          },
          {
            loader: 'sass-loader',
          },
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: BUILD_DIR + '/asset/fonts/'
            }
        }]
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new copyPlugin([
      {
        from: APP_DIR + '/index.html',
        to: BUILD_DIR
      },
      {
        from: APP_DIR + '/asset/font/',
        to: BUILD_DIR + '/asset/font/'
      },
      {
        from: APP_DIR + '/asset/img/',
        to: BUILD_DIR + '/asset/img/'
      }
    ]),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.scss',
    ],
    mainFiles: [
      'index',
      'style',
    ],
  },
}

module.exports = config
