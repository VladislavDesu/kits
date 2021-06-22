module.exports = gulp.task("scripts", () => {
  return mergeStream(
    gulp
      .src(path.dev.scripts)
      // .pipe(webpack(webpackConfig))
      .pipe(gulpif(argv.prod, uglify()))
      .pipe(
        rename({
          suffix: ".min",
        })
      )
      .pipe(gulp.dest(path.build.scripts)),
    gulp
      .src("vendor/bootstrap/js/bootstrap.min.js")
      // .pipe(webpack(webpackConfig))
      .pipe(gulp.dest(path.build.scripts))
  );
});
