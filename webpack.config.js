var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: {
    lib: path.join(__dirname, "src/index"),
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "cjs.js",
    libraryTarget: 'umd',
    library: 'cjs',
    publicPath: "dist/"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: "babel-loader",
      include: path.join(__dirname, "src"),
      query: {
        plugins: ['transform-runtime'],
        cacheDirectory: true,
        presets: ['es2015']
      }
    }],
  },
  devtool: "source-map"
};
