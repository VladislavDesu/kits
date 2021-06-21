module.exports = [
  (isLESS = (file) => {
    return file.extname === ".less";
  }),
  (isSASS = (file) => {
    return file.extname === ".sass" || file.extname === ".scss";
  }),
  (isCSS = (file) => {
    return file.extname === ".css";
  }),
  (isHTML = (file) => {
    return file.extname === ".html";
  }),
  (isPUG = (file) => {
    return file.extname === ".pug";
  }),
];
