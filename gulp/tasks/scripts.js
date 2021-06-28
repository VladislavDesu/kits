module.exports = gulp.task("scripts", () => {
  return gulp
    .src(path.dev.scripts)
    .pipe(
      webpack(webpackConfig).on("error", function handleError() {
        this.emit("end");
      })
    )
    .pipe(gulpif(argv.prod, uglify()))
    .pipe(rename("main.min.js"))
    .pipe(gulp.dest(path.build.scripts))
    .pipe(browsersync.stream());
});
