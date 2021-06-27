/* webpack.config.js */

module.exports = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/env"],
          plugins: ["babel-plugin-root-import"],
        },
      },
    ],
  },
};
