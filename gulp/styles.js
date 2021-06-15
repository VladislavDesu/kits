const gulp = require("gulp"),
   scss = require("gulp-sass"),
   postcss = require("gulp-postcss"),
   autoprefixer = require("autoprefixer"),
   mqpacker = require("css-mqpacker"),
   cleanCSS = require("gulp-clean-css"),
   plumber = require("gulp-plumber"),
   sourcemaps = require("gulp-sourcemaps"),
   hash = require("gulp-hash"),
   rename = require("gulp-rename");

const path = require("./path");

const styles = () => {
   return (
      gulp
         .src(path.src.styles)
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
         .pipe(hash({ template: "<%= name %>-<%= hash %>.min<%= ext %>" }))
         .pipe(gulp.dest(path.build.styles))
         .pipe(
            hash.manifest("manifest.json", {
               deleteOld: true,
            })
         )
      // .pipe(browserSync.stream());
   );
};

module.exports = styles;
