require("dotenv").config();

const Image = require("@11ty/eleventy-img");
const HTMLMinifier = require("html-minifier");

module.exports = (eleventyConfig) => {
    // they are simply copied (later optimized with subfont)
    eleventyConfig.addPassthroughCopy("fonts");
    eleventyConfig.addPassthroughCopy("app.js");
    eleventyConfig.addPassthroughCopy("favicon.ico");
    // ... and watched too
    eleventyConfig.addWatchTarget("fonts");
    eleventyConfig.addWatchTarget("app.js");
    eleventyConfig.addWatchTarget("favicon.ico");

    // format date obj
    eleventyConfig.addNunjucksFilter("formatDate", (date) => (
        new Intl.DateTimeFormat('ja-JP').format(date)
    ));

    // generate optimized images in "_site/img/" and returns an appropreate picture tag
    eleventyConfig.addNunjucksAsyncShortcode("image", async (src, alt, sizes) => {
        const img = await Image(src, {
            outputDir: "_site/img/",
            widths: [null] /* keep original */
        });
        return Image.generateHTML(img, {
            alt,
            sizes,
            loading: "lazy",
            decoding: "async",
        })
    });

    // minify generated HTML (and inlined CSS/JS)
    eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
        if (outputPath.endsWith(".html")) {
            return HTMLMinifier.minify(content, {
                collapseBooleanAttributes: true,
                collapseWhitespace: true,
                removeComments: true,
                minifyCSS: true,
                minifyJS: true,
            });
        }
        return content;
    });
};
