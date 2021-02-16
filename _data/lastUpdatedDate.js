const { Octokit } = require("@octokit/rest");
const { AssetCache } = require("@11ty/eleventy-cache-assets");

module.exports = async () => {
    const cache = new AssetCache("lastUpdatedDate");

    if (cache.isCacheValid("1d")) {
        const value = await cache.getCachedValue();
        return new Date(value);
    }

    const octokit = new Octokit({
        auth: process.env.GITHUB_API_TOKEN
    });

    const repo = await octokit.repos.get({
        owner: "zk-phi",
        repo: "zk-phi.github.io",
    });

    cache.save(repo.data.pushed_at);
    return new Date(repo.data.pushed_at);
};
