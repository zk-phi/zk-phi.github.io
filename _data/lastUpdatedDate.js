const { Octokit } = require("@octokit/rest");

module.exports = async () => {
    const octokit = new Octokit({
        auth: process.env.GITHUB_API_TOKEN
    });

    const repo = await octokit.repos.get({
        owner: "zk-phi",
        repo: "zk-phi.github.io",
    });

    return new Date(repo.data.pushed_at);
};
