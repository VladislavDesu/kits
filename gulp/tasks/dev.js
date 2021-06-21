module.exports = gulp.task(
  "dev",
  gulp.series(
    "clean",
    "vendor",
    gulp.parallel("fonts", "images", "styles", "scripts"),
    "layout",
    "server"
  )
);
