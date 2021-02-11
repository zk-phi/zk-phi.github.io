import * as React from "react";
import { graphql } from "gatsby";
import "../styles/font.css";

const formatRepo = ({ node: repo }) => ({
    source: "GitHub",
    title: repo.name,
    link: repo.url,
    pubDate: new Date(repo.createdAt),
});

const formatQiitaPost = ({ node: post }) => ({
    source: "Qiita",
    title: post.title,
    link: post.url,
    pubDate: new Date(post.created_at),
});

const formatFeedItem = (source) => ({ node: item }) => ({
    source: source,
    title: item.title,
    link: item.link,
    pubDate: new Date(item.pubDate)
});

const IndexPage = ({ data }) => {
    const lim = new Date();
    lim.setMonth(lim.getMonth() - 12);

    const items = [
        ...data.allGithubData.edges[0].node.data.repositoryOwner.repositories.edges.map(formatRepo),
        ...data.allQiitaPost.edges.map(formatQiitaPost),
        ...data.allFeedNote.edges.map(formatFeedItem("note")),
        ...data.allFeedSpeakerdeck.edges.map(formatFeedItem("Speakerdeck")),
        ...data.allFeedSoundcloud.edges.map(formatFeedItem("Soundcloud")),
    ].filter((item) => item.pubDate >= lim);

    return (
        <main>
          <title>GatsbyJS すごい</title>
          <h1>最近の活動</h1>
          <p>ここ一年の活動をいろんなサイトから収集します</p>
          <ul>
            { items.sort((a, b) => a.pubDate <  b.pubDate ? 1 : -1).map((item) => (
                <li key={ item.link }>
                  [{ item.source }]
                  <a target="_blank" rel="noreferrer" href={ item.link }>{ item.title }</a>
                  ({ item.pubDate.toLocaleString() })
                </li>
            )) }
          </ul>
        </main>
    );
}

export default IndexPage;

export const query = graphql`
    query {
        allGithubData {
            edges {
                node {
                    data {
                        repositoryOwner {
                            repositories {
                                edges {
                                    node {
                                        createdAt
                                        name
                                        url
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        allQiitaPost {
            edges {
                node {
                    title
                    url
                    created_at
                }
            }
        }
        allFeedNote {
            edges {
                node {
                    title
                    link
                    pubDate
                }
            }
        }
        allFeedSpeakerdeck {
            edges {
                node {
                    title
                    link
                    pubDate
                }
            }
        }
        allFeedSoundcloud {
            edges {
                node {
                    title
                    link
                    pubDate
                }
            }
        }
    }
`;
