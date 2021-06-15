const gulp = require("gulp"),
   pug = require("gulp-pug"),
   browserSync = require("browser-sync").create();
// const htmlValidator = require('gulp-w3c-html-validator')

const path = require("./path");

const layout = () => {
   return (
      gulp
         .src(path.src.layout)
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
         .pipe(browserSync.stream())
   );
};

module.exports = layout;
