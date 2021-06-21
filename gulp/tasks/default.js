module.exports = gulp.task(
  "default",
  gulp.series(
    "clean",
    "vendor",
    gulp.parallel("fonts", "images", "styles", "scripts"),
    "layout"
  )
);
