module.exports = gulp.task(
  "default",
  gulp.series("clean", "copy", "fonts", "images", "styles", "layout")
);
