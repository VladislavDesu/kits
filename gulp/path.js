module.exports = {
  dev: {
    layout: "dev/layout/**/*.+(pug|html)",
    styles: "dev/styles/**/*.+(scss|sass|less)",
    images: "dev/images/**/*.{png,jpg,gif,svg}",
    scripts: "dev/scripts/**/*.js",
    fonts: "dev/fonts/**/*.ttf",
  },

  project: {
    root: "./",
  },

  server: {
    baseDir: "./build/layout/",
  },

  build: {
    root: "build/",
    layout: "build/layout/",
    styles: "build/styles/",
    images: {
      root: "build/images/",
      src: "build/images/**/*.{png,jpg}",
      webp: "build/images/webp/",
    },
    scripts: "build/scripts/",
    fonts: "build/fonts/",
  },
};
