// module.exports.packageJSON = function(pkgJson) { };
// module.exports.jestConfig = function(jestConfig) { };

module.exports.tsconfig = function tsconfig(config) {
  config.angularCompilerOptions.skipTemplateCodegen = false;
}

// module.exports.rollupFESM = function(rollupConfig) { };
// module.exports.rollupUMD = function(rollupConfig) { };
