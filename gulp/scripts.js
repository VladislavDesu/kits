gulp.task("scripts", () => {
   return (
      gulp
         .src(paths.build.scripts, { allowEmpty: true })
         .pipe(clean())
         .pipe(gulp.src(paths.src.scripts))
         // .pipe(uglify())
         .pipe(gulp.dest(paths.build.scripts))
         .pipe(browserSync.stream())
   );
});

// gulp.task('scripts', () => {
//    return gulp.src(['./src/js/**/*.js'])
//      .pipe(gulp.dest('./build/js'))
//      .pipe(browserSync.stream());
//  });

// gulp.task('scripts-min', () => {
//    return gulp.src([
//      './build/js/**/*.js',
//      '!./build/js/**/*.min.js'
//    ])
//      .pipe(uglify({
//        toplevel: true
//      }))
//      .pipe(rename({
//        suffix: '.min'
//      }))
//      .pipe(gulp.dest('./build/js'))
//  });

// const gulp = require('gulp')
// const uglify = require('gulp-uglify-es').default;
// const argv = require('yargs').argv
// const webpack = require('webpack-stream')
// const rename = require('gulp-rename')
// const gulpif = require('gulp-if')

// // Работа со скриптами

// module.exports = function script() {
//   return gulp.src(['dev/static/js/*.js', '!dev/static/js/*.min.js'])
//     .pipe(webpack({
//       mode: 'production',
//       module: {
//         rules: [
//           {
//             test: /\.(js)$/,
//             exclude: /(node_modules)/,
//             loader: 'babel-loader',
//             query: {
//               presets: ['@babel/env'],
//               plugins: ['babel-plugin-root-import']
//             }
//           }
//         ]
//       }
//     })).on('error', function handleError() {
//       this.emit('end')
//     })
//     .pipe(rename('main.min.js'))
//     .pipe(gulpif(argv.prod, uglify()))
//     .pipe(gulp.dest('dist/static/js/'))
// }
