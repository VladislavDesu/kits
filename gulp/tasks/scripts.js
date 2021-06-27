module.exports = gulp.task("scripts", () => {
  return mergeStream(
    gulp
      .src(path.dev.scripts)
      .pipe(
        webpack(webpackConfig).on("error", function handleError() {
          this.emit("end");
        })
      )
      .pipe(gulpif(argv.prod, uglify()))
      .pipe(rename("main.min.js"))
      .pipe(gulp.dest(path.build.scripts))
      .pipe(browsersync.stream()),
    gulp
      .src("vendor/bootstrap/js/bootstrap.min.js")
      .pipe(gulp.dest(path.build.scripts))
      .pipe(browsersync.stream()),
    gulp
      .src("vendor/jquery/jquery.min.js")
      .pipe(gulp.dest(path.build.scripts))
      .pipe(browsersync.stream())
  );
});
