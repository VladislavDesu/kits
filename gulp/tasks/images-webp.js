module.exports = gulp.task("images-webp", () => {
  return gulp
    .src(path.dev.images)
    .pipe(
      webp({
        quality: 100,
        method: 6,
      })
    )
    .pipe(gulp.dest(path.build.images));
});
