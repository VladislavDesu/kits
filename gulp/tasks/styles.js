module.exports = gulp.task("styles", () => {
  return gulp
    .src(path.dev.styles)
    .pipe(gulpif(!argv.prod, sourcemaps.init()))
    .pipe(plumber())
    .pipe(gulpif(isLESS, less()))
    .pipe(
      gulpif(
        isSASS,
        sass({
          outputStyle: "expanded",
        }).on("error", sass.logError)
      )
    )
    .pipe(
      postcss([
        autoprefixer({
          overrideBrowserslist: ["last 4 version"],
        }),
        mqpacker({
          sort: true,
        }),
      ])
    )
    .pipe(
      gulpif(
        argv.prod,
        cleanCSS((details) => {
          console.log(
            `${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`
          );
        })
      )
    )
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(gulpif(!argv.prod, sourcemaps.write("")))
    .pipe(gulp.dest(path.build.styles));
});
