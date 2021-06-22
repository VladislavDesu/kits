module.exports = gulp.task("server", () => {
  browsersync.init({
    server: path.build.root,
  });

  gulp.watch(path.dev.layout.root, gulp.series("layout"));
  gulp.watch(path.dev.scripts, gulp.series("scripts"));
  gulp.watch(path.dev.styles, gulp.series("styles"));
  gulp.watch(path.dev.images, gulp.series("images"));
  gulp.watch(path.dev.fonts, gulp.series("fonts"));
});
