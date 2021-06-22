module.exports = gulp.task("images", () => {
  return gulp
    .src(path.dev.images)
    .pipe(
      imagemin([
        imagemin.optipng({
          optimizationLevel: 5,
        }),
        imagemin.mozjpeg({
          quality: 70,
          progressive: true,
        }),
        imagemin.svgo({
          plugins: [
            { removeViewBox: true },
            { cleanupIDs: false },
            {
              removeDoctype: false,
            },
            {
              removeComments: false,
            },
            {
              cleanupNumericValues: {
                floatPrecision: 2,
              },
            },
            {
              convertColors: {
                names2hex: false,
                rgb2hex: false,
              },
            },
          ],
        }),
      ])
    )
    .pipe(gulp.dest(path.build.images.root))
    .pipe(browsersync.stream());
});
