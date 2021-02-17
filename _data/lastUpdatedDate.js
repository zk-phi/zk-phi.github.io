const Cache = require("@11ty/eleventy-cache-assets");

module.exports = async () => {
    const uri = "https://api.github.com/repos/zk-phi/zk-phi.github.io";

    const res = await Cache(uri, {
        duration: "1d",
        type: "json"
    });

    return new Date(res.pushed_at);
};
