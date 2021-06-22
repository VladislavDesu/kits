module.exports = gulp.task("vendor", () => {
  // Bootstrap JS
  const bootstrapJS = gulp
    .src("./node_modules/bootstrap/dist/js/*")
    .pipe(gulp.dest("./build/vendor/bootstrap/js"));
  // Bootstrap SCSS
  const bootstrapSCSS = gulp
    .src("./node_modules/bootstrap/scss/**/*")
    .pipe(gulp.dest("./build/vendor/bootstrap/scss"));

  return mergeStream(bootstrapJS, bootstrapSCSS);
});
