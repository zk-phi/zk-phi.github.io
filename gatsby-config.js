require("dotenv").config();

const githubQuery = `{
  repositoryOwner(login: "zk-phi") {
    repositories(isFork: false, first: 50, ownerAffiliations: OWNER, orderBy: {field: CREATED_AT, direction: DESC}, privacy: PUBLIC) {
      edges {
        node {
          name
          url
          createdAt
        }
      }
    }
  }
}`;

module.exports = {
    pathPrefix: '/gatsby-otameshi',
    siteMetadata: {
    },
    plugins: [
        {
            resolve: `gatsby-source-qiita`,
            options: {
                accessToken: process.env.QIITA_API_TOKEN,
                userName: "zk_phi",
                fetchPrivate: false,
            }
        },
        {
            resolve: `gatsby-source-rss-feed`,
            options: {
                url: "https://note.com/zk_phi/rss",
                name: `Note`,
            }
        },
        {
            resolve: `gatsby-source-rss-feed`,
            options: {
                url: "https://speakerdeck.com/zk_phi.atom",
                name: `Speakerdeck`,
            }
        },
        {
            resolve: `gatsby-source-rss-feed`,
            options: {
                url: "https://feeds.soundcloud.com/users/soundcloud:users:6471748/sounds.rss",
                name: `Soundcloud`,
            }
        },
        {
            resolve: `gatsby-source-rss-feed`,
            options: {
                url: "https://zenn.dev/zk_phi/feed",
                name: `Zenn`,
            }
        },
        {
            resolve: `gatsby-source-rss-feed`,
            options: {
                url: "https://scrapbox.io/api/feed/zkphi",
                name: `Scrapbox`,
            }
        },
        {
            resolve: `gatsby-source-rss-feed`,
            options: {
                url: "https://www.youtube.com/feeds/videos.xml?channel_id=UC9_g5OIOEDXQsaqV3BkRWcQ",
                name: `YouTube`,
            }
        },
        {
            resolve: `gatsby-source-github-api`,
            options: {
                token: process.env.GITHUB_API_TOKEN,
                graphQLQuery: githubQuery,
            }
        },
    ],
};
