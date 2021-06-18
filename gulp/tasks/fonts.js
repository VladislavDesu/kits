module.exports = gulp.task("fonts", () => {
  return mergeStream(
    gulp.src(path.dev.fonts).pipe(ttf2woff()).pipe(gulp.dest(path.build.fonts)),
    gulp.src(path.dev.fonts).pipe(ttf2woff2()).pipe(gulp.dest(path.build.fonts))
  );
});
