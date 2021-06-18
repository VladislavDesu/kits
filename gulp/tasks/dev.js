module.exports = gulp.task(
  "dev",
  gulp.series(
    "clean",
    gulp.parallel("fonts", "images", "styles", "scripts"),
    "layout",
    "server"
  )
);
