// Usage of ES6 import/export statements, which have to be compiled to commonjs module.exports
// Single File Components (.vue files) which have to be run through vue-jest
// Typescript code
module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  transformIgnorePatterns: ["/node_modules/"],
  // We have to add exceptions to this pattern with a RegExp negative lookahead:
  transformIgnorePatterns: ["/node_modules/(?!name-of-lib-o-transform)"],
  // To exclude multiple libraries:
  transformIgnorePatterns: ["/node_modules/(?!lib-to-transform|other-lib)"],
};
