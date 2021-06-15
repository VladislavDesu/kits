const gulp = require("gulp"),
   ttf2woff = require("gulp-ttf2woff"),
   ttf2woff2 = require("gulp-ttf2woff2");

const path = require("./path");

const fonts = () => {
   return gulp
      .src(path.src.fonts)
      .pipe(gulp.dest(path.build.fonts))
      .pipe(ttf2woff())
      .pipe(gulp.dest(path.build.fonts))
      .pipe(gulp.src(path.src.fonts))
      .pipe(ttf2woff2())
      .pipe(gulp.dest(path.build.fonts));
   // .pipe(browserSync.stream());
};

module.exports = fonts;
