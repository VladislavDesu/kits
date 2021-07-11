module.exports = gulp.task("copy", () => {
  return gulp
    .src([
      path.dev.root,
      "!dev/fonts",
      "!dev/images",
      "!dev/layout",
      "!dev/styles",
      "!dev/scripts",
      "!dev/fonts/**/*",
      "!dev/images/**/*",
      "!dev/layout/**/*",
      "!dev/styles/**/*",
      "!dev/scripts/**/*",
    ])
    .pipe(gulp.dest(path.build.root));
});
