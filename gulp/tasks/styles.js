module.exports = gulp.task("styles", () => {
  function isLess(file) {
    return file.extname === ".less";
  }

  return (
    gulp
      .src(path.dev.styles)
      .pipe(gulpif(!argv.prod, sourcemaps.init()))
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
      .pipe(gulpif(!argv.prod, sourcemaps.write("")))
      // .pipe(
      //   gulpif(
      //     argv.prod,
      //     hash({ template: "<%= name %>-<%= hash %>.min<%= ext %>" }),
      //     rename({
      //       suffix: ".min",
      //     })
      //   )
      // )
      .pipe(gulp.dest(path.build.styles))
  );
  // .pipe(
  //   gulpif(
  //     argv.prod,
  //     hash.manifest("manifest.json", {
  //       deleteOld: true,
  //       append: true,
  //     })
  //   )
  // )
  // .pipe(gulpif(argv.prod, gulp.dest(path.project.root)));
});
