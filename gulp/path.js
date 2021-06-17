module.exports = {
  dev: {
    layout: "dev/layout/**/*.+(pug|html)",
    styles: "dev/styles/**/*.+(scss|sass|less)",
    images: "dev/images/**/*.{png,jpg,gif,svg}",
    scripts: "dev/scripts/**/*.js",
    fonts: "dev/fonts/**/*.ttf",
  },

  server: {
    baseDir: "./build",
  },

  build: {
    root: "build/",
    layout: "build/layout/",
    styles: "build/styles/",
    images: "build/images/",
    scripts: "build/scripts/",
    fonts: "build/fonts/",
  },
};
