const gulp = require("gulp"),
   browserSync = require("browser-sync");

const path = require("./path"),
   layout = require("./layout");

const server = () => {
   browserSync.init({
      server: path.project.root,
      port: 3000,
      startPath: path.build.layout,
      // open: false,
      notify: true,
      cors: true,
   });

   gulp.watch(path.src.layout, gulp.series(layout));
   // gulp.watch(paths.src.styles, gulp.series("css"));
   // gulp.watch(paths.src.images, gulp.series("images"));
   // gulp.watch(paths.src.scripts, gulp.series("scripts"));
   // gulp.watch(paths.src.fonts, gulp.series("fonts"));

   // gulp.watch("./build/html/**/*").on("change", browserSync.reload);
   //   gulp.watch('dist/*.html').on('change', server.reload)
};

module.exports = server;
