module.exports = gulp.task("fonts", () => {
   return gulp
      .src(path.dev.fonts)
      .pipe(gulp.dest(path.build.fonts))
      .pipe(ttf2woff())
      .pipe(gulp.dest(path.build.fonts))
      .pipe(gulp.src(path.dev.fonts))
      .pipe(ttf2woff2())
      .pipe(gulp.dest(path.build.fonts));
});
