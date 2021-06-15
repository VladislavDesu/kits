const gulp = require("gulp");

const styles = require("./styles"),
   fonts = require("./fonts"),
   images = require("./images"),
   server = require("./server"),
   clean = require("./clean"),
   scripts = require("./scripts");

const starter = gulp.series(styles, fonts, images, scripts);

module.exports = gulp.series(clean, starter, server);
