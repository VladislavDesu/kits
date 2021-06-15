gulp.task("html", () => {
   return gulp
      .src(paths.src.html)
      .pipe(posthtml([include()]))
      .pipe(
         htmlmin({
            collapseWhitespace: true,
         })
      )
      .pipe(gulp.dest(paths.build.root))
      .pipe(browserSync.stream());
});

// gulp.task('markup', (cb) => {
//    gulp.src([
//      './src/html/*.html',
//      '!./src/html/parts/**/*'
//    ])
//    .pipe(extender({
//      annotations: false,
//      verbose: false
//    }))
//    .pipe(htmlhint('.htmlhintrc'))
//    .pipe(htmlhint.reporter())
//    .pipe(htmlhint.failAfterError())
//    .pipe(gulp.dest('./build/html'));
//    cb();
//  });

// const gulp = require('gulp')
// const htmlValidator = require('gulp-w3c-html-validator')
// const plumber = require('gulp-plumber')
// const pug = require('gulp-pug')
// const argv = require('yargs').argv
// const gulpif = require('gulp-if')
// const fs = require('fs')

// let dataFromJson
// if (argv.prod) {
//   dataFromJson = JSON.parse(fs.readFileSync('./manifest.json'))
//   dataFromJson.styles = dataFromJson['styles.css']
//   delete dataFromJson['styles.css']
//   fs.writeFileSync('./manifest.json', JSON.stringify(dataFromJson, null, 4))
// }

// // Преобразуем Pug в HTML
// module.exports = function pug2html() {
//   return gulp.src('dev/pug/*.pug')
//     .pipe(plumber())
//     .pipe(gulpif(argv.prod, pug({
//       pretty: true,
//       locals: dataFromJson || {}
//     }), pug({ pretty: true })))
//     .pipe(plumber.stop())
//     .pipe(htmlValidator())
//     .pipe(gulp.dest('dist'))
// }
