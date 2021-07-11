module.exports = gulp.task("styles", () => {
  return gulp
    .src(path.dev.styles)
    .pipe(gulpif(!argv.prod, sourcemaps.init()))
    .pipe(plumber())
    .pipe(
      sass({
        outputStyle: "expanded",
      }).on("error", sass.logError)
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
    .pipe(gulpif(argv.prod, cleanCSS()))
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(gulpif(!argv.prod, sourcemaps.write("")))
    .pipe(gulp.dest(path.build.styles))
    .pipe(browsersync.stream());
});
