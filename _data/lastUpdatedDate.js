const { Octokit } = require("@octokit/rest");
const { AssetCache } = require("@11ty/eleventy-cache-assets");

module.exports = async () => {
    const cache = new AssetCache("lastUpdatedDate");

    let repo;
    if (cache.isCacheValid("1d")) {
        repo = await cache.getCachedValue();
    } else {
        const octokit = new Octokit({
            auth: process.env.GITHUB_API_TOKEN
        });
        const res = await octokit.repos.get({
            owner: "zk-phi",
            repo: "zk-phi.github.io",
        });
        repo = res.data;
        cache.save(res.data, "json");
    }

    return new Date(repo.pushed_at);
};
