module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    './src/_data/events.json': '/feed/events.json',
  });

  // Where are my things?
  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
