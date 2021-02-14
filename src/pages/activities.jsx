import * as React from "react";
import { graphql } from "gatsby";
import Layout from '../components/Layout.jsx';
import Link from '../components/Link.jsx';
import Emoji from "../components/Emoji.jsx";
import PageTitle from '../components/PageTitle.jsx';
import ActivityListItem from "../components/ActivityListItem.jsx";
import Section from "../components/Section.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import List from "../components/List.jsx";

const MONTH_EMOJIS = [
    "🎍",
    "👹",
    "🎎",
    "🌸",
    "🎏",
    "🐌",
    "🎋",
    "🎆",
    "🎑",
    "🎃",
    "🍁",
    "🎄",
];

const CATEGORIES = [
    "OSS",
    "テック記事",
    "趣味記事",
    "イベント",
    "メモ",
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

const factorSortedItemsByMonth = (items) => {
    if (!items) return [];

    const ret = [{
        year: items[0].pubDate.getFullYear(),
        month: items[0].pubDate.getMonth(),
        items: [],
    }];
    items.forEach((item) => {
        const year = item.pubDate.getFullYear();
        const month = item.pubDate.getMonth();
        if (year !== ret[0].year || month !== ret[0].month) {
            ret.unshift({ year, month, items: [] });
        }
        ret[0].items.push(item);
    });

    return ret.reverse();
};

const Activities = ({ data }) => {
    const [filter, setFilter] = React.useState("");

    const handleFilter = (e) => {
        setFilter(e.target.value);
    };

    const now = new Date();
    const lim = new Date(now.getFullYear(), now.getMonth() - 11);

    const items = [
        ...data.allGithubData.edges[0].node.data.repositoryOwner.repositories.edges.map(formatRepo),
        ...data.allQiitaPost.edges.map(formatQiitaPost),
        ...data.allFeedNote.edges.map(formatFeedItem("note", "趣味記事")),
        ...data.allFeedSpeakerdeck.edges.map(formatFeedItem("Speakerdeck", "趣味記事")),
        ...data.allFeedSoundcloud.edges.map(formatFeedItem("Soundcloud", "その他")),
        ...data.allFeedZenn.edges.map(formatFeedItem("Zenn", "テック記事")),
        ...data.allFeedYouTube.edges.map(formatFeedItem("YouTube", "その他")),
        ...data.allFeedScrapbox.edges.map(formatFeedItem("Scrapbox", "メモ")),
        ...data.allConnpassEvents.nodes.map(formatConnpassEvent),
    ].filter((item) => (
        item && item.pubDate >= lim && (!filter || filter === item.category)
    )).sort((a, b) => a.pubDate < b.pubDate ? 1 : -1);

    const itemsByMonth = factorSortedItemsByMonth(items);

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

          { itemsByMonth.map((m) => (
              <Section key={ m.year * 12 + m.month }>
                <SectionHeader>
                  <Emoji ji={ MONTH_EMOJIS[m.month] } puni /> { m.month + 1 }月
                  <small>/{ m.year }</small>
                </SectionHeader>
                <List>
                  { m.items.map((item) => (
                      <ActivityListItem key={ item.link } item={ item } />
                  )) }
                </List>
              </Section>
            ))}

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
        allFeedScrapbox {
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
