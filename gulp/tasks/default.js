module.exports = gulp.task(
  "default",
  gulp.series(
    "clean",
    gulp.parallel("fonts", "images", "styles", "scripts"),
    "layout"
  )
);
