module.exports = gulp.task("layout", () => {
  function isPug(file) {
    return file.extname === ".pug";
  }

  return gulp
    .src(path.dev.layout)
    .pipe(plumber())
    .pipe(gulpif(isPug, pug({ pretty: true })))
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
