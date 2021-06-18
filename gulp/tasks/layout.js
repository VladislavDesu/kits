module.exports = gulp.task("layout", () => {
  function isPug(file) {
    return file.extname === ".pug";
  }

  // let manifest = {};
  // if (argv.prod) {
  //   manifest = JSON.parse(fs.readFileSync("./manifest.json"));
  //   console.dir(manifest.lang, {
  //     showHidden: true,
  //   });
  //   manifest.style;
  //   fs.writeFileSync("./manifest.json", JSON.stringify(manifest, null, 4));
  // }
  // console.dir(JSON.parse(fs.readFileSync("./manifest.json")), {
  //   showHidden: true,
  // });

  return gulp
    .src(path.dev.layout)
    .pipe(plumber())
    .pipe(
      gulpif(
        isPug,
        pug({ pretty: true })
        // gulpif(
        //   argv.prod,
        //   pug({
        //     pretty: true,
        //     locals: manifest || {},
        //   }),
        //   pug({ pretty: true })
        // )
      )
    )
    .pipe(
      gulpif(
        argv.prod,
        htmlmin({
          collapseWhitespace: true,
        })
      )
    )
    .pipe(gulp.dest(path.build.layout));
});
