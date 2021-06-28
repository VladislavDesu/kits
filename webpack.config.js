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
  // module: {
  //   rules: [
  //     {
  //       test: /\.(js)$/,
  //       exclude: /(node_modules)/,
  //       use: {
  //         loader: "babel-loader",
  //         options: {
  //           presets: ["@babel/preset-env"],
  //           plugins: ["babel-plugin-root-import"],
  //         },
  //       },
  //     },
  //   ],
  // },
};
