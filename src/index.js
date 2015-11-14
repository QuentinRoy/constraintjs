import cjs from "./cjs";

// exports with commonjs as webpack's umd does not export es6's module default
module.exports = cjs;