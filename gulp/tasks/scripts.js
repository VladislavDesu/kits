module.exports = gulp.task("scripts", () => {
  return gulp
    .src(path.dev.scripts)
    .pipe(uglify())
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(gulp.dest(path.build.scripts));
});
