module.exports = gulp.task("clean", () => {
  return clean("dev/styles/vendor"), clean(path.build.root);
});
