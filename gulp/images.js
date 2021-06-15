const gulp = require("gulp"),
   imagemin = require("gulp-imagemin"),
   webp = require("gulp-webp");

const images = () => {
   return gulp
      .src("src/images/**/*")
      .pipe(
         imagemin([
            imagemin.optipng({
               optimizationLevel: 5,
            }),
            imagemin.mozjpeg({
               quality: 70,
               progressive: true,
            }),
            imagemin.svgo({
               plugins: [
                  { removeViewBox: true },
                  { cleanupIDs: false },
                  {
                     removeDoctype: false,
                  },
                  {
                     removeComments: false,
                  },
                  {
                     cleanupNumericValues: {
                        floatPrecision: 2,
                     },
                  },
                  {
                     convertColors: {
                        names2hex: false,
                        rgb2hex: false,
                     },
                  },
               ],
            }),
         ])
      )
      .pipe(gulp.dest("build/images/"))
      .pipe(gulp.src("src/images/**/*"))
      .pipe(
         webp({
            quality: 100,
            method: 6,
         })
      )
      .pipe(gulp.dest("build/images/"));
   // .pipe(browserSync.stream());
};

module.exports = images;
