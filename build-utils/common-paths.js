const path = require("path");

const PROJECT_ROOT = path.resolve(__dirname, "../");
const APP_ENTRY = path.join(PROJECT_ROOT, "src");

module.exports = {
  projectRoot: PROJECT_ROOT,
  appEntry: APP_ENTRY,
  outputPath: path.join(PROJECT_ROOT, "dist"),
  componentsPath: path.join(APP_ENTRY, "components"),
  corePath: path.join(APP_ENTRY, "core"),
  pagePath: path.join(APP_ENTRY, "page"),
  staticPath: path.join(APP_ENTRY, "static"),
  stylesPath: path.join(APP_ENTRY, "styles"),
  utilsPath: path.join(APP_ENTRY, "utils"),
};
