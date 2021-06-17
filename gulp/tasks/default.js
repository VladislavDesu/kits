module.exports = gulp.task(
  "default",
  gulp.series("clean", "fonts", "images", "styles", "scripts", "layout")
);
