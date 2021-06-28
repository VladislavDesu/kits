module.exports = gulp.task("vendor", () => {
  // Bootstrap SCSS
  return gulp
    .src("./node_modules/bootstrap/scss/**/*")
    .pipe(gulp.dest("./dev/styles/vendor/bootstrap/scss/"));
});
