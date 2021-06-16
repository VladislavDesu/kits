module.exports = gulp.task("styles", () => {
   return (
      gulp
         .src(path.dev.styles)
         .pipe(sourcemaps.init())
         .pipe(plumber())
         .pipe(
            scss({
               outputStyle: "expanded",
            }).on("error", scss.logError)
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

         .pipe(gulp.dest(path.build.styles))
         .pipe(
            cleanCSS((details) => {
               console.log(
                  `${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`
               );
            })
         )
         .pipe(
            rename({
               suffix: ".min",
            })
         )
         .pipe(sourcemaps.write(""))
         // ПРОВЕРИТЬ ПОДКЛЮЧЕНИЕ (КАК РАБОТАЕТ) ЕСЛИ ЧТО РАЗДЕЛИТЬ НА ПРОД И БИЛД ИЛИ STYLES И STYLES-MIN
         // .pipe(hash({ template: "<%= name %>-<%= hash %>.min<%= ext %>" }))
         .pipe(gulp.dest(path.build.styles))
      // .pipe(
      //    hash.manifest("manifest.json", {
      //       deleteOld: true,
      //    })
      // )
   );
});
