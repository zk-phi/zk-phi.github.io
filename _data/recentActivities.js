const Cache = require("@11ty/eleventy-cache-assets");
const FastXmlParser = require("fast-xml-parser");

const rssItems = ({ uri, source, category }) => async () => {
    const res = await Cache(uri, {
        duration: "1d",
        type: "text",
    });

    const xml = FastXmlParser.parse(res);

    return xml.rss.channel.item.map((item) => ({
        source,
        category,
        title: item.title,
        link: item.link,
        pubDate: new Date(item.pubDate),
    }));
};

const atomItems = ({ uri, source, category }) => async () => {
    const res = await Cache(uri, {
        duration: "1d",
        type: "text",
    });

    const xml = FastXmlParser.parse(res, {
        attributeNamePrefix: "",
        ignoreAttributes: false
    });

    return xml.feed.entry.map((item) => ({
        source,
        category,
        title: item.title,
        link: item.link.href,
        pubDate: new Date(item.published),
    }));
};

const jsonItems = ({ uri, field, filter, formatter }) => async () => {
    const res = await Cache(uri, {
        duration: "1d",
        type: "json",
    });

    const items = field ? res[field] : res;

    return items.filter(filter || (() => true)).map(formatter || ((x) => x));
};

const getRecentConnpassEvents = jsonItems({
    uri: "https://connpass.com/api/v1/event/?nickname=zk-phi",
    field: "events",
    formatter: (event) => ({
        source: "connpass",
        category: "イベント",
        title: event.title,
        link: event.event_url,
        pubDate: new Date(event.started_at),
    }),
});

const getRecentGithubRepos = jsonItems({
    uri: "https://api.github.com/users/zk-phi/repos?type=owner&sort=created&per_page=100",
    filter: (repo) => !repo.archived && !repo.private && !repo.fork,
    formatter: (repo) => ({
        source: "GitHub",
        category: "OSS",
        title: repo.name,
        link: repo.html_url,
        pubDate: new Date(repo.created_at),
    }),
});

const getRecentNotePosts = rssItems({
    uri: "https://note.com/zk_phi/rss",
    source: "note",
    category: "趣味記事",
});

const getRecentQiitaPosts = jsonItems({
    uri: "https://qiita.com/api/v2/items?query=user:zk_phi&per_page=20",
    filter: (post) => !post.private,
    formatter: (post) => ({
        source: "Qiita",
        category: "テック記事",
        title: post.title,
        link: post.url,
        pubDate: new Date(post.created_at),
    }),
});

const getRecentScrapboxNotes = rssItems({
    uri: "https://scrapbox.io/api/feed/zkphi",
    source: "Scrapbox",
    category: "メモ",
});

const getRecentSoundcloudPosts = rssItems({
    uri: "https://feeds.soundcloud.com/users/soundcloud:users:6471748/sounds.rss",
    source: "Soundcloud",
    category: "その他",
});

const getRecentSpeakerdeckSlides = atomItems({
    uri: "https://speakerdeck.com/zk_phi.atom",
    source: "Speakerdeck",
    category: "趣味記事",
});

const getRecentYoutubePosts = atomItems({
    uri: "https://www.youtube.com/feeds/videos.xml?channel_id=UC9_g5OIOEDXQsaqV3BkRWcQ",
    source: "YouTube",
    category: "その他",
});

const getRecentZennPosts = rssItems({
    uri: "https://zenn.dev/zk_phi/feed",
    source: "Zenn",
    category: "テック記事",
});

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

module.exports = async () => {
    const recentConnpassEvents = await getRecentConnpassEvents();
    const recentGithubRepos = await getRecentGithubRepos();
    const recentNotePosts = await getRecentNotePosts();
    const recentQiitaPosts = await getRecentQiitaPosts();
    const recentScrapboxNotes = await getRecentScrapboxNotes();
    const recentSoundcloudPosts = await getRecentSoundcloudPosts();
    const recentSpeakerdeckSlides = await getRecentSpeakerdeckSlides();
    const recentYoutubePosts = await getRecentYoutubePosts();
    const recentZennPosts = await getRecentZennPosts();

    const now = new Date();
    const lim = new Date(now.getFullYear(), now.getMonth() - 11);

    const activities = [
        ...recentConnpassEvents,
        ...recentGithubRepos,
        ...recentNotePosts,
        ...recentQiitaPosts,
        ...recentScrapboxNotes,
        ...recentSoundcloudPosts,
        ...recentSpeakerdeckSlides,
        ...recentYoutubePosts,
        ...recentZennPosts,
    ].filter((item) => (
        item.pubDate >= lim
    )).sort((a, b) => a.pubDate < b.pubDate ? 1 : -1);

    return activities;
};
