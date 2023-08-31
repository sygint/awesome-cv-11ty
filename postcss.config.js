const isDev = process.env.NODE_ENV === "production";

const plugins = [
  require("postcss-import"),
  require("postcss-import-url"),
  require("postcss-nested"),
  require('postcss-font-base64'),
];

plugins.push(require("postcss-browser-reporter"));

exports.plugins = plugins;

module.exports = { plugins, map: isDev ? { inline: false } : false };
