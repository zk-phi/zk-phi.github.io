import * as React from "react";
import { graphql } from "gatsby";
import Layout from '../components/Layout.jsx';
import Link from '../components/Link.jsx';
import Emoji from "../components/Emoji.jsx";
import PageTitle from '../components/PageTitle.jsx';
import ActivityListItem from "../components/ActivityListItem.jsx";
import Section from "../components/Section.jsx";

const CATEGORIES = [
    "OSS",
    "テック記事",
    "趣味記事",
    "イベント",
    "その他",
];

const formatRepo = ({ node: repo }) => (
    !repo.isArchived && {
        source: "GitHub",
        category: "OSS",
        title: repo.name,
        link: repo.url,
        pubDate: new Date(repo.createdAt),
    }
);

const formatQiitaPost = ({ node: post }) => (
    {
        source: "Qiita",
        category: "テック記事",
        title: post.title,
        link: post.url,
        pubDate: new Date(post.created_at),
    }
);

const formatFeedItem = (source, category) => ({ node: item }) => (
    {
        source: source,
        category: category,
        title: item.title,
        link: item.link,
        pubDate: new Date(item.pubDate),
    }
);

const formatConnpassEvent = (item) => (
    {
        source: "connpass",
        category: "イベント",
        title: item.title,
        link: item.event_url,
        pubDate: new Date(item.started_at),
    }
);

const Activities = ({ data }) => {
    const [filter, setFilter] = React.useState("");

    const handleFilter = (e) => {
        setFilter(e.target.value);
    };

    const lim = new Date();
    lim.setMonth(lim.getMonth() - 12);

    const items = [
        ...data.allGithubData.edges[0].node.data.repositoryOwner.repositories.edges.map(formatRepo),
        ...data.allQiitaPost.edges.map(formatQiitaPost),
        ...data.allFeedNote.edges.map(formatFeedItem("note", "趣味記事")),
        ...data.allFeedSpeakerdeck.edges.map(formatFeedItem("Speakerdeck", "趣味記事")),
        ...data.allFeedSoundcloud.edges.map(formatFeedItem("Soundcloud", "その他")),
        ...data.allFeedZenn.edges.map(formatFeedItem("Zenn", "テック記事")),
        ...data.allFeedYouTube.edges.map(formatFeedItem("YouTube", "その他")),
        ...data.allConnpassEvents.nodes.map(formatConnpassEvent),
    ].filter((item) => item && item.pubDate >= lim && (!filter || filter === item.category));

    return (
        <Layout title="zk-phi の部屋 :: 最近の活動">
          <PageTitle><Emoji ji="💻" rotate /> 最近の活動 <Emoji ji="💻" rotate /></PageTitle>

          <p>
            直近１年の間に公開したフリーソフト・文書などをまとめました。
          </p>

          <p>
            <Link to="/">&lt; 戻る</Link>
          </p>

          <hr />

          <p>
            絞り込む: <select value={ filter } onChange={ handleFilter } onBlur={ handleFilter }>
            <option value="">全て</option>
            { CATEGORIES.map((category) => (
                <option key={ category } value={ category }>{ category }</option>
            )) }
            </select>
          </p>

          <Section>
            <ul>
              { items.sort((a, b) => a.pubDate <  b.pubDate ? 1 : -1).map((item) => (
                  <ActivityListItem key={ item.link } item={ item } />
              )) }
            </ul>
          </Section>

          <hr />

          <p>
            <Link to="/">&lt; 戻る</Link>
          </p>
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
                                        isArchived
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
