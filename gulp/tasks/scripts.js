module.exports = gulp.task("scripts", () => {
  return gulp
    .src(path.dev.scripts)
    .pipe(gulpif(argv.prod, uglify()))
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(gulp.dest(path.build.scripts));
});
