module.exports = {
  dev: {
    root: "dev/**/*",
    layout: {
      src: "dev/layout/*.+(pug|html)",
      root: "dev/layout/",
    },
    styles: "dev/styles/**/*.+(scss|sass|less|css)",
    images: "dev/images/**/*.{png,jpg,gif,svg}",
    scripts: "dev/scripts/**/*.js",
    fonts: "dev/fonts/**/*.ttf",
  },

  build: {
    root: "build/",
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
