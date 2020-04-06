const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const jsonImporter = require('node-sass-json-importer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackDeleteAfterEmit = require('webpack-delete-after-emit');

const mainConfig = {
   entry: './src',
   mode: 'production',
   devtool: 'source-map',
   optimization: {
      minimizer: [
         new UglifyJsPlugin({
            uglifyOptions: {
               warnings: false,
               keep_fnames: true,
               keep_classnames: true,
            },
         }),
      ],
   },
   resolve: {
      extensions: ['.js', '.jsx'],
   },
   module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js(x)$/,
        exclude: /node_modules/,
        use: 'eslint-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules(?!\/webpack-dev-server)/,
        use: 'babel-loader',
      },
      {
        test: /^((?!\.global).)*scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
             options: {
                modules: {
                    localIdentName: '[local]__[hash:base64:6]',
                },
                importLoaders: 2,
                sourceMap: true,
                url: false,
             }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              importer: jsonImporter,
            },
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
            options: {
              sourceMap: true,
              // importer: jsonImporter,
              //outputStyle: 'compressed',
            },
          },
        ],
      },
      {
        test: /\.global.(scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader?-url&importLoaders=2&sourceMap',
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              importer: jsonImporter,
            },
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
            options: {
              sourceMap: true,
              importer: jsonImporter,
              outputStyle: 'compressed',
            },
          },
        ],
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'markdown-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true, // true outputs JSX tags
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  output: {
     path: path.resolve(__dirname, 'dist'),
     filename: 'Input.stories.js',
     library: '@omaxwellanderson/react-components',
     libraryTarget: 'umd',
  },
};

module.exports = mainConfig;
