module.exports = gulp.task("layout", () => {
  return gulp
    .src(path.dev.layout)
    .pipe(plumber())
    .pipe(gulpif(isPUG, pug({ pretty: true })))
    .pipe(
      gulpif(
        argv.prod,
        htmlmin({
          collapseWhitespace: true,
        })
      )
    )
    .pipe(gulp.dest(path.build.layout));
});
