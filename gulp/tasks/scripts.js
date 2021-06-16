module.exports = gulp.task("scripts", () => {
   return gulp
      .src(path.dev.scripts)
      .pipe(
         uglify()
         //    {
         //    toplevel: true,
         // }
      )
      .pipe(
         rename({
            suffix: ".min",
         })
      )
      .pipe(gulp.dest(path.build.scripts));
});
