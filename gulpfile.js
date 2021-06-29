require("./gulp/functions");
path = require("./gulp/path");
webpackConfig = require("./webpack.config.js");
require("./gulp/dependencies");
require("./gulp/tasks/clean");
require("./gulp/tasks/fonts");
require("./gulp/tasks/images");
require("./gulp/tasks/webp");
require("./gulp/tasks/styles");
require("./gulp/tasks/scripts");
require("./gulp/tasks/layout");
require("./gulp/tasks/server");
require("./gulp/tasks/dev");
require("./gulp/tasks/default");
