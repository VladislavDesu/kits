const gulp = require("gulp"),
   rename = require("gulp-rename"),
   uglify = require("gulp-uglify");

const path = require("./path");

const scripts = () => {
   return gulp
      .src(path.src.scripts)
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
   // .pipe(browserSync.stream());
};

module.exports = scripts;
