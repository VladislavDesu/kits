module.exports = gulp.task("webp", () => {
  return gulp
    .src(path.build.images.src)
    .pipe(
      webp({
        quality: 100,
        method: 6,
      })
    )
    .pipe(gulp.dest(path.build.images.webp))
    .pipe(browsersync.stream());
});
