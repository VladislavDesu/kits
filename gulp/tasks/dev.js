module.exports = gulp.task(
  "dev",
  gulp.series(
    "clean",
    "copy",
    "fonts",
    "images",
    "styles",
    "scripts",
    "layout",
    "server"
  )
);
