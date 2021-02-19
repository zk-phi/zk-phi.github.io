const Image = require("@11ty/eleventy-img");

module.exports = (eleventyConfig) => {
    // merge data
    eleventyConfig.setDataDeepMerge(true);

    // they are simply copied (later optimized with subfont)
    eleventyConfig.addPassthroughCopy("fonts");
    eleventyConfig.addPassthroughCopy("svg");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("favicon.ico");
    // ... and watched too
    eleventyConfig.addWatchTarget("fonts");
    eleventyConfig.addWatchTarget("svg");
    eleventyConfig.addWatchTarget("js");
    eleventyConfig.addWatchTarget("css");
    eleventyConfig.addWatchTarget("favicon.ico");

    // format date obj
    eleventyConfig.addNunjucksFilter("formatDate", (date) => (
        new Intl.DateTimeFormat('ja-JP').format(date)
    ));

    // generate optimized images in "_site/img/" and returns an appropreate picture tag
    eleventyConfig.addNunjucksAsyncShortcode("image", async (src, alt, opts) => {
        const img = await Image(src, {
            outputDir: "_site/img/",
            widths: [null] /* keep original */
        });
        return Image.generateHTML(img, {
            alt,
            sizes: opts?.sizes,
            class: opts?.class,
            loading: "lazy",
            decoding: "async",
        })
    });
};
