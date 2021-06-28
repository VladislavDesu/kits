module.exports = gulp.task(
  "dev",
  gulp.series(
    "clean",
    "vendor",
    "fonts",
    "images",
    "styles",
    "scripts",
    "layout",
    "server"
  )
);
