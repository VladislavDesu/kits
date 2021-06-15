const del = require("del");

const path = require("./path");

const clean = () => {
   return del(path.build.root);
};

module.exports = clean;
