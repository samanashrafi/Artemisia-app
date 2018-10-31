"use strict";
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].app.js",
    chunkFilename: "[name].app.js",
    path: path.resolve("dist"),
    filename: "app.js"
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src")
    }
  },
  externals: {
    // 'react': 'react',
    // 'react-dom': 'react-dom',
    // 'react-router': 'React-router',
    // 'axios':'axios',
    'propTypes':'prop-types'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        // vendor chunk
        vendor: {
          // sync + async chunks
          chunks: "all",
          name: "vendor",
          // import file path containing node_modules
          test: /node_modules/
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader", options: { sourceMap: false } },
          {
            loader: "css-loader",
            options: { minimize: true, sourceMap: false }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
    open: true,
    proxy: {
      "/api": "http://localhost:5000"
    }
  },
  plugins: [
    new ExtractTextPlugin({ filename: "style.css" }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
