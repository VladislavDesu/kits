module.exports = gulp.task("scripts", () => {
  return gulp
    .src(path.dev.scripts)
    .pipe(webpack(webpackConfig))
    .pipe(gulpif(argv.prod, uglify()))
    .pipe(gulp.dest(path.build.scripts))
    .pipe(browsersync.stream());
});
