module.exports = gulp.task("layout", () => {
  return gulp
    .src(path.dev.layout)
    .pipe(plumber())
    .pipe(pug({ pretty: true }))
    .pipe(
      htmlmin({
        collapseWhitespace: true,
      })
    )
    .pipe(gulp.dest(path.build.layout));
});
