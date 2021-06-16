module.exports = gulp.task("layout", () => {
   return (
      gulp
         .src(path.dev.layout)
         // plumber
         .pipe(pug({ pretty: true }))
         // .pipe(htmlValidator())
         // .pipe(posthtml([include()]))
         // .pipe(
         //    htmlmin({
         //       collapseWhitespace: true,
         //    })
         // )
         // .pipe(htmlhint(".htmlhintrc"))
         // .pipe(htmlhint.reporter())
         // .pipe(htmlhint.failAfterError())
         .pipe(gulp.dest(path.build.layout))
   );
});
