const gulp = require("gulp"),
   rename = require("gulp-rename"),
   uglify = require("gulp-uglify");

const scripts = () => {
   return gulp
      .src("src/scripts/**/*")
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
      .pipe(gulp.dest("build/scripts/"));
   // .pipe(browserSync.stream());
};

module.exports = scripts;
