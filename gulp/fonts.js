const gulp = require("gulp"),
   ttf2woff = require("gulp-ttf2woff"),
   ttf2woff2 = require("gulp-ttf2woff2");

module.exports = () => {
   return gulp
      .src("src/fonts/**/*")
      .pipe(gulp.dest("build/fonts"))
      .pipe(ttf2woff())
      .pipe(gulp.dest("build/fonts"))
      .pipe(gulp.src("src/fonts/**/*"))
      .pipe(ttf2woff2())
      .pipe(gulp.dest("build/fonts"));
   // .pipe(browserSync.stream());
};
