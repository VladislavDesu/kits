/* webpack.config.js */

const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./dev/scripts/main.js",
    bootstrap: "bootstrap",
  },
  output: {
    path: path.resolve(__dirname, "build/scripts/"),
    filename: "[name].bundle.js",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
