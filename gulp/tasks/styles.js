module.exports = gulp.task("styles", () => {
  function isLess(file) {
    return file.extname === ".less";
  }

  return gulp
    .src(path.dev.styles)
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(
      gulpif(
        isLess,
        less(),
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
    .pipe(sourcemaps.write(""))
    .pipe(gulp.dest(path.build.styles));
});
