module.exports = gulp.task(
  "default",
  gulp.series("clean", "vendor", "fonts", "images", "styles", "layout")
);
