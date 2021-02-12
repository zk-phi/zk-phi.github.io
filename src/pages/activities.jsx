import * as React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import Layout from '../components/Layout.jsx';

const formatRepo = ({ node: repo }) => ({
    source: "GitHub",
    category: "tech",
    title: repo.name,
    link: repo.url,
    pubDate: new Date(repo.createdAt),
});

const formatQiitaPost = ({ node: post }) => ({
    source: "Qiita",
    category: "tech",
    title: post.title,
    link: post.url,
    pubDate: new Date(post.created_at),
});

const formatFeedItem = (source, category) => ({ node: item }) => ({
    source: source,
    category: category,
    title: item.title,
    link: item.link,
    pubDate: new Date(item.pubDate),
});

const formatConnpassEvent = (item) => ({
    source: "connpass",
    category: "event",
    title: item.title,
    link: item.event_url,
    pubDate: new Date(item.started_at),
});

const Activities = ({ data }) => {
    const [filter, setFilter] = React.useState("");

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const lim = new Date();
    lim.setMonth(lim.getMonth() - 6);

    const items = [
        ...data.allGithubData.edges[0].node.data.repositoryOwner.repositories.edges.map(formatRepo),
        ...data.allQiitaPost.edges.map(formatQiitaPost),
        ...data.allFeedNote.edges.map(formatFeedItem("note", "hobby")),
        ...data.allFeedSpeakerdeck.edges.map(formatFeedItem("Speakerdeck", "hobby")),
        ...data.allFeedSoundcloud.edges.map(formatFeedItem("Soundcloud", "hobby")),
        ...data.allFeedZenn.edges.map(formatFeedItem("Zenn", "tech")),
        ...data.allFeedYouTube.edges.map(formatFeedItem("YouTube", "hobby")),
        ...data.allConnpassEvents.nodes.map(formatConnpassEvent),
    ].filter((item) => item.pubDate >= lim && (!filter || filter === item.category));

    return (
        <Layout>
          <title>GatsbyJS すごい</title>
          <h1>最近の活動</h1>
          <p>ここ半年の活動をいろんなサイトから収集します</p>
          <p><Link to="/">&lt; 戻る</Link></p>

          <select value={ filter } onChange={ handleFilterChange } onBlur={ handleFilterChange }>
            <option value="">全て</option>
            <option value="tech">テック</option>
            <option value="hobby">趣味</option>
            <option value="event">イベント参加</option>
          </select>

          <ul>
            { items.sort((a, b) => a.pubDate <  b.pubDate ? 1 : -1).map((item) => (
                <li key={ item.link }>
                  [{ item.source }]
                  <a target="_blank" rel="noreferrer" href={ item.link }>{ item.title }</a>
                  ({ item.pubDate.toLocaleString() })
                </li>
            )) }
          </ul>
        </Layout>
    );
}

export default Activities;

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
        allFeedZenn {
            edges {
                node {
                    title
                    link
                    pubDate
                }
            }
        }
        allFeedYouTube {
            edges {
                node {
                    title
                    link
                    pubDate
                }
            }
        }
        allConnpassEvents {
            nodes {
                title
                event_url
                started_at
            }
        }
    }
`;
