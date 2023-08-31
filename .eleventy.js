const PostCSSPlugin = require("eleventy-plugin-postcss");
const bundlerPlugin = require("@11ty/eleventy-plugin-bundle");
const eleventyWebcPlugin = require("@11ty/eleventy-plugin-webc");
const yaml = require("js-yaml");
const postcss = require("postcss");
const { plugins: postcssPlugins } = require("./postcss.config");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(PostCSSPlugin);
  eleventyConfig.addPlugin(bundlerPlugin, {
    transforms: [
      async function (content) {
        // this.type returns the bundle name.
        if (this.type === "css") {
          // Same as Eleventy transforms, this.page is available here.
          let result = await postcss(postcssPlugins).process(
            content,
            {
              from: this.page.inputPath,
              to: null,
            }
          );

          return result.css;
        }

        return content;
      },
    ],
  });
  eleventyConfig.addPlugin(eleventyWebcPlugin, {
    components: ["npm:@11ty/eleventy-img/*.webc", "src/components/*.webc"],
  });
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));
  eleventyConfig.addJavaScriptFunction("stylizeName", (text) => {
    const words = text.split(" ");

    return `${words.slice(0, words.length - 1).join(" ")} <span>${
      words[words.length - 1]
    }</span>`;
  });

  eleventyConfig.addJavaScriptFunction(
    "makeTitle",
    (title) => `<span>${title.slice(0, 3)}</span>${title.slice(3)}`
  );

  eleventyConfig.addJavaScriptFunction("join", (array, delimiter) =>
    array.join(delimiter)
  );

  // Set custom directories for input, output, includes, and data
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      includes: "includes",
      data: "_data",
      output: "build",
    },
  };
};
