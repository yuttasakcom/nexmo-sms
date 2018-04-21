const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const resolve = dir => path.resolve(__dirname, "..", dir);

const config = {
  entry: resolve("client/main.js"),
  output: {
    path: resolve("dist"),
    filename: "bundle.js"
  },
  resolve: {
    alias: {
      "@": resolve("client")
    },
    extensions: [".js", ".vue"]
  },
  devServer: {
    historyApiFallback: {
      disableDotRule: true
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
        loader: "file-loader",
        options: {
          name: "images/[name].[hash:7].[ext]"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve("client/public/index.html")
    })
  ]
};

module.exports = config;
