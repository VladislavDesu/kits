const gulp = require("gulp");

const gulpPath = [
   require("./clean"),
   require("./fonts"),
   require("./images"),
   require("./styles"),
   require("./scripts"),
   require("./layout"),
   require("./server"),
];

module.exports = gulp.series(...gulpPath);
