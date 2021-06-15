const gulp = require("gulp");
const browserSync = require("browser-sync").create();

const server = () => {
   browserSync.init({
      server: "./",
      port: 3000,
      startPath: "build/html/index.html",
      notify: true,
      cors: true,
   });

   // gulp.watch(paths.src.html, gulp.series("html"));
   // gulp.watch(paths.src.styles, gulp.series("css"));
   // gulp.watch(paths.src.images, gulp.series("images"));
   // gulp.watch(paths.src.scripts, gulp.series("scripts"));
   // gulp.watch(paths.src.fonts, gulp.series("fonts"));

   // gulp.watch("./build/html/**/*").on("change", browserSync.reload);
   //   gulp.watch('dist/*.html').on('change', server.reload)
};

module.exports = server;
