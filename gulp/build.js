// gulp.task(
//    "build",
//    gulp.series("html", "css", "images", "icons", "fonts", "scripts")
// );

// gulp.task(
//    "default",
//    gulp.series(
//       "del",
//       "markup",
//       gulp.parallel("styles", "scripts"),
//       gulp.parallel("styles-min", "scripts-min"),
//       "replace-url",
//       "watch"
//    )
// );

const gulp = require("gulp");

const styles = require("./styles");
const fonts = require("./fonts");
const images = require("./images");
const server = require("./server");
const clean = require("./clean");

gulp.task("clean", clean);
gulp.task("styles", styles);
gulp.task("fonts", fonts);
gulp.task("images", images);
gulp.task("server", server);

module.exports = gulp.series("clean", "styles", "fonts", "images", "server");
