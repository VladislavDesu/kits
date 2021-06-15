const gulp = require("gulp");

const styles = require("./styles"),
   fonts = require("./fonts"),
   images = require("./images"),
   server = require("./server"),
   clean = require("./clean"),
   scripts = require("./scripts"),
   layout = require("./layout");

const starter = gulp.series(fonts, images, styles, scripts, layout);

module.exports = gulp.series(clean, starter, server);
