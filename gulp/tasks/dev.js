module.exports = gulp.task(
  "dev",
  gulp.series(
    "clean",
    "fonts",
    "images",
    "styles",
    "scripts",
    "layout",
    "server"
  )
);
