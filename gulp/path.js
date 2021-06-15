const path = {
   src: {
      layout: "src/layout/**/*.pug",
      styles: "src/styles/**/*.+(scss|sass|less)",
      images: "src/images/**/*.{png,jpg,gif,svg}",
      scripts: "src/scripts/**/*.js",
      fonts: "src/fonts/**/*.ttf",
   },

   project: {
      root: "./",
   },

   build: {
      root: "build/",
      styles: "build/styles/",
      images: "build/images/",
      scripts: "build/scripts/",
      fonts: "build/fonts/",
      layout: "build/layout/",
   },
};

module.exports = path;
