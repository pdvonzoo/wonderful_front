const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");

const options = {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.[contentHash].js"
  },
  optimization: { minimizer: [] }
};

module.exports = merge(common, options);
