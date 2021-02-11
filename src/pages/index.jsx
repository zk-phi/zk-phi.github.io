import * as React from "react";
import { graphql } from "gatsby";
import "../styles/font.css";

const IndexPage = ({ data }) => {
    const githubRepos = data.allGithubData.edges[0].node.data.repositoryOwner.repositories;
    const qiitaPosts = data.allQiitaPost;
    const notePosts = data.allFeedNote;
    const speakerdeckSlides = data.allFeedSpeakerdeck;
    return (
        <main>
          <title>GatsbyJS すごい</title>
          <h1>いろいろ</h1>
          <h2>GitHub</h2>
          <ul>
            { githubRepos.edges.map((repo) => (
                <li key={ repo.node.url }>
                  <a href={ repo.node.url }>{ repo.node.name }</a> ({ repo.node.createdAt })
                </li>
            )) }
          </ul>
          <h2>Qiita</h2>
          <ul>
            { qiitaPosts.edges.map((post) => (
                <li key={ post.node.url }>
                  <a href={ post.node.url }>{ post.node.title }</a> ({ post.node.created_at })
                </li>
            )) }
          </ul>
          <h2>note</h2>
          <ul>
            { notePosts.edges.map((post) => (
                <li key={ post.node.link }>
                  <a href={ post.node.link }>{ post.node.title }</a> ({ post.node.pubDate })
                </li>
            )) }
          </ul>
          <h2>Speakerdeck</h2>
          <ul>
            { speakerdeckSlides.edges.map((post) => (
                <li key={ post.node.link }>
                  <a href={ post.node.link }>{ post.node.title }</a> ({ post.node.pubDate })
                </li>
            )) }
          </ul>
        </main>
    );
}

export default IndexPage;

export const query = graphql`
    query {
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
    }
`;
