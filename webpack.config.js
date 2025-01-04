const path = require("path");

// eslint-disable-next-line no-undef
module.exports = {
  // eslint-disable-next-line no-undef
  context: path.resolve(__dirname, "src"),
  entry: "./index.js",
  output: {
    filename: "js/main.js",
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    hot: true,
    static: {
      directory: "./dist",
      watch: true,
    },
  },
};
