module.exports = gulp.task("vendor", () => {
  // Bootstrap JS
  const bootstrapJS = gulp
    .src("./node_modules/bootstrap/dist/js/*")
    .pipe(gulp.dest("./vendor/bootstrap/js"));
  // Bootstrap SCSS
  const bootstrapSCSS = gulp
    .src("./node_modules/bootstrap/scss/**/*")
    .pipe(gulp.dest("./vendor/bootstrap/scss"));
  // Jquery
  const bootstrapSCSS = gulp
    .src("./node_modules/jquery/dist/")
    .pipe(gulp.dest("./vendor/jquery/"));

  return mergeStream(bootstrapJS, bootstrapSCSS);
});
