// const browserSync = require("browser-sync").create();
//    htmlmin = require("gulp-htmlmin"),
//    posthtml = require("gulp-posthtml"),
//    include = require("posthtml-include"),

// const extender = require("gulp-html-extend");
// const htmlhint = require("gulp-htmlhint");
// const less = require("gulp-less");
// const uglify = require("gulp-uglify");

const gulp = require("gulp");
const build = require("./gulp/build");

gulp.task("default", build);
