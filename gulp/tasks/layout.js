module.exports = gulp.task("layout", () => {
  return gulp
    .src(path.dev.layout.src)
    .pipe(plumber())
    .pipe(pug({ pretty: true }))
    .pipe(
      gulpif(
        argv.prod,
        htmlmin({
          collapseWhitespace: true,
        })
      )
    )
    .pipe(gulp.dest(path.build.root))
    .pipe(browsersync.stream());
});
