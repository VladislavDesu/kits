const html = () => {
   return (
      gulp
         .src(paths.src.html)
         //     .pipe(plumber())
         //     .pipe(gulpif(argv.prod, pug({
         //       pretty: true,
         //       locals: dataFromJson || {}
         //     }), pug({ pretty: true })))
         //     .pipe(plumber.stop())
         //     .pipe(htmlValidator())
         .pipe(posthtml([include()]))
         .pipe(
            htmlmin({
               collapseWhitespace: true,
            })
         )
         //    .pipe(extender({
         //      annotations: false,
         //      verbose: false
         //    }))
         //    .pipe(htmlhint('.htmlhintrc'))
         //    .pipe(htmlhint.reporter())
         //    .pipe(htmlhint.failAfterError())
         .pipe(gulp.dest(paths.build.root))
         .pipe(browserSync.stream())
   );
};

// const gulp = require('gulp')
// const htmlValidator = require('gulp-w3c-html-validator')
// const pug = require('gulp-pug')

module.exports = html;
