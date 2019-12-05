module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("javascripts");

  return {
    templateFormats: [
      "njk",
      "pug",
      "css",
      "png",
      "jpg",
      "ico",
      "zip"
    ]
  };
};