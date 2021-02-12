import * as React from "react";
import { graphql } from "gatsby";
import Emoji from "../components/Emoji.jsx";
import Layout from '../components/Layout.jsx';
import PageTitle from '../components/PageTitle.jsx';
import ClassicBtn from '../components/ClassicBtn.jsx';
import Link from "../components/Link.jsx";
import New from '../components/New.jsx';
import DateFormat from "../utils/DateFormat.jsx";
import imgYozora from "../images/yozora.jpg";
import imgYawnlife from "../images/yawnlife.gif";
import imgHappybusy from "../images/happybusy.gif";
import imgCellphone from "../images/cellphone.gif";

const Index = ({ data }) => {
    const lastUpdated = new Date(
        data.allGithubData.edges[0].node.data.repository.ref.target.authoredDate
    );

    const [clapBtnEnabled, setClapBtnEnabled] = React.useState(true);
    const clap = () => {
        window.alert("応援ありがとうございます!!");
        setClapBtnEnabled(false);
    };

    const unionBanners = [
        { href: "http://nanos.jp/mimi5510/", src: imgYozora, alt: "夜空が好き" },
        { href: "http://id11.fm-p.jp/31/mbp/", src: imgCellphone, alt: "携帯依存症" },
        { href: "https://sites.google.com/site/happybusy/", src: imgHappybusy, alt: "時間ねぇー" },
        { href: "http://id47.fm-p.jp/36/yawnlife/", src: imgYawnlife, alt: "ゆる春同盟。" },
    ];

    return (
        <Layout>
          <title>zk-phi の部屋</title>

          <PageTitle><Emoji ji="🌴"/> zk-phi の部屋 <Emoji ji="🌴" /></PageTitle>

          <p>
            zk-phi のホームページへようこそ！
            ここでは私の作成したフリーソフト、したためた文書などを公開しています。
          </p>

          <p>
            最終更新日： { DateFormat.format(lastUpdated) }
          </p>

          <ul>
            <li>
              <Link to="/activities">最近の活動</Link> <New />
            </li>
            <li>
              <Link to="/links">リンク集</Link>
            </li>
          </ul>

          <hr />

          <p>
            { unionBanners.map((union) => [
                  <Link key={ union.href } href={ union.href }>
                    <img alt={ union.alt } src={ union.src } />
                  </Link>,
                  " "
            ]) }
          </p>

          <p>
            <ClassicBtn onClick={ clap } disabled={ !clapBtnEnabled }>
              拍手を送る
            </ClassicBtn>
          </p>
        </Layout>
    );
};

export default Index;

export const query = graphql`
    query {
        allGithubData {
            edges {
                node {
                    data {
                        repository {
                            ref {
                                target {
                                    authoredDate
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
