const Image = require("@11ty/eleventy-img");
const Kuroshiro = require("@dsquare-gbu/kuroshiro");
const KuromojiAnalyzer = require("kuroshiro-analyzer-kuromoji");
const Slugify = require('slugify');
const HTMLMin = require('html-minifier');

const kuroshiro = new Kuroshiro();
const kuroshiroInitialized = kuroshiro.init(new KuromojiAnalyzer());

module.exports = (eleventyConfig) => {
    // merge data
    eleventyConfig.setDataDeepMerge(true);

    // they are simply copied (later optimized with subfont)
    eleventyConfig.addPassthroughCopy("fonts");
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("favicon.ico");
    // ... and watched too
    eleventyConfig.addWatchTarget("fonts");
    eleventyConfig.addWatchTarget("img");
    eleventyConfig.addWatchTarget("js");
    eleventyConfig.addWatchTarget("css");
    eleventyConfig.addWatchTarget("favicon.ico");

    // minify HTML with html-minifier
    eleventyConfig.addTransform('htmlmin', function(content, outputPath) {
        if (outputPath.endsWith('.html')) {
            return HTMLMin.minify(content, {
                collapseBooleanAttributes: true,
                collapseWhitespace: true,
                collapseInlineTagWhitespace: true,
                removeComments: true,
                minifyCSS: {
                    level: 2
                },
                minifyJS: true,
                removeEmptyAttributes: true,
                removeOptionalTags: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                removeTagWhitespace: true,
                useShortDoctype: true
            })
        } else {
            return content;
        }
    });

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

    // make slug from activity
    eleventyConfig.addNunjucksAsyncFilter("activitySlug", (activity, callback) => {
        kuroshiroInitialized.then(() =>
            kuroshiro.convert(activity.source + "-" + activity.title, { to: "romaji" })
        ).then((res) => {
            callback(null, Slugify(res, { lower: true, strict: true, locale: "ja" }));
        });
    });

    // filter activities by category
    eleventyConfig.addNunjucksFilter("filterActivities", (data, tag) => {
        if (!tag) {
            return data.filter((item) => item.category !== "メモ");
        } else {
            return data.filter((item) => item.category === tag);
        }
    });

    // group activities by month
    eleventyConfig.addNunjucksFilter("groupActivityByMonth", (data) => {
        if (!data) {
            return [];
        }

        const itemsByMonth = [{
            year: data[0].pubDate.getFullYear(),
            month: data[0].pubDate.getMonth(),
            items: [],
        }];
        data.forEach((item) => {
            const year = item.pubDate.getFullYear();
            const month = item.pubDate.getMonth();
            if (year !== itemsByMonth[0].year || month !== itemsByMonth[0].month) {
                itemsByMonth.unshift({ year, month, items: [] });
            }
            itemsByMonth[0].items.push(item);
        });

        return itemsByMonth.reverse();
    });

    return {
        dir: {
            includes: "",
            layouts: "_layouts",
        }
    };
};
