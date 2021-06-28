module.exports = gulp.task("vendor", () => {
  // Bootstrap JS
  const bootstrapJS = gulp
    .src("./node_modules/bootstrap/dist/js/bootstrap.min.js")
    .pipe(gulp.dest("./dev/scripts/vendor/bootstrap/"));
  // Bootstrap SCSS
  const bootstrapSCSS = gulp
    .src("./node_modules/bootstrap/scss/**/*")
    .pipe(gulp.dest("./dev/styles/vendor/bootstrap/scss"));
  // Jquery JS
  const jqueryJS = gulp
    .src("./node_modules/jquery/dist/jquery.min.js")
    .pipe(gulp.dest("./dev/scripts/vendor/jquery/"));
  // slickSlider JS
  const slickSliderJS = gulp
    .src("./node_modules/slick-slider/slick/slick.min.js")
    .pipe(gulp.dest("./dev/scripts/vendor/slick-slider/"));
  return mergeStream(bootstrapJS, bootstrapSCSS, jqueryJS, slickSliderJS);
});
