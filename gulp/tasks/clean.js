module.exports = gulp.task("clean", () => {
  return (
    clean("dev/styles/vendor"),
    clean("dev/scripts/vendor"),
    clean(path.build.root)
  );
});
