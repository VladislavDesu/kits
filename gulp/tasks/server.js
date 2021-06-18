module.exports = gulp.task("server", () => {
  browsersync.init({
    server: {
      baseDir: path.server.baseDir,
    },
  });

  gulp
    .watch(path.dev.layout, gulp.series("layout"))
    .on("change", browsersync.reload);
  gulp
    .watch(path.dev.scripts, gulp.series("scripts"))
    .on("change", browsersync.reload);
  gulp
    .watch(path.dev.styles, gulp.series("styles"))
    .on("change", browsersync.reload);
  gulp
    .watch(path.dev.images, gulp.series("images"))
    .on("change", browsersync.reload);
  gulp
    .watch(path.dev.fonts, gulp.series("fonts"))
    .on("change", browsersync.reload);
});
