import * as React from "react";
import Emoji from "../components/Emoji.jsx";
import Link from "../components/Link.jsx";
import Layout from '../components/Layout.jsx';
import PageTitle from '../components/PageTitle.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

const Others = () => {
    return (
        <Layout title="zk-phi の部屋 :: その他">
          <PageTitle><Emoji ji="🍺"/> その他 <Emoji ji="🍺" /></PageTitle>

          <p>
            その他の活動です。
          </p>

          <p>
            <Link to="/links">&lt; 戻る</Link>
          </p>

          <hr />

          <SectionHeader>イベント出展 <small>(頒布物があったもの)</small></SectionHeader>

          <ul>
            <li>
              <Link href="https://github.com/zk-phi/switch42-keyboard">
                【技術書典６】Switch42 キーボードキット
              </Link>
            </li>
            <li>
              <Link href="https://github.com/zk-phi/pollux-keyboard">
                【技術書典６】Pollux キーボードキット
              </Link>
            </li>
            <li>
              <Link href="https://riconken.bitbucket.io/hifumi/">
                【技術書典６, Ｃ９６】ここから始める自作キーボード (寄稿, ハード設計)
              </Link>
            </li>
            <li>
              <Link href="https://sites.google.com/view/riconken/%E3%83%9B%E3%83%BC%E3%83%A0">
                【技術書典５】四人の知らなかった自作キーボードの世界 (寄稿)
              </Link>
            </li>
          </ul>

          <SectionHeader>Podcast</SectionHeader>

          <ul>
            <li>
              <Link href="https://podcasts.apple.com/jp/podcast/season-2-keybords-ep-5-%E5%A4%A9%E3%82%AD%E3%83%BC-vol-2-%E5%85%AC%E9%96%8B%E5%8F%8E%E9%8C%B2-%E3%82%AD%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%9E%E3%82%A4%E3%82%BA%E3%83%91%E3%83%8D%E3%83%AB%E3%83%87%E3%82%A3%E3%82%B9%E3%82%AB%E3%83%83%E3%82%B7%E3%83%A7%E3%83%B3/id1173331146?i=1000437542348">
                それはそう 天キー Vol.2 公開収録 (ゲスト)
              </Link>
            </li>
          </ul>

          <SectionHeader>メディア <small>(目についたもの)</small></SectionHeader>

          <ul>
            <li>窓の杜ＮＥＷＳ 2007/9/14</li>
            <li>Windows100% 2007 年 11 月号</li>
            <li>iP! 2008 年 2 月号</li>
            <li>Windows100% 2008 年 6 月号</li>
            <li>iP! 2008 年 6 月号</li>
            <li>フリーソフトベストセレクション</li>
            <li>このフリーソフトがすごい！ 2008 年前期版</li>
            <li>フリーソフト大百科</li>
            <li>厳選フリーソフト集 350</li>
            <li>完全保存版フリーソフトガイド BOOK</li>
            <li>Makerzine 2019.05.21</li>
          </ul>

          <SectionHeader>表彰</SectionHeader>

          <ul>
            <li>ICPC 2014 アジア予選進出</li>
            <li>CODE BOUT 決勝進出</li>
            <li>日本語プログラミングコンテスト 2007 入賞</li>
          </ul>

          <SectionHeader>競プロ</SectionHeader>

          リハビリ中

          <ul>
            <li>
              <Link href="https://atcoder.jp/users/zk_phi">
                AtCoder
              </Link>
            </li>
            <li>
              <Link href="http://judge.u-aizu.ac.jp/onlinejudge/user.jsp?id=zk_phi">
                Aizu Online Judge
              </Link>
            </li>
            <li>
              <Link href="https://projecteuler.net/progress=zk_phi">
                Project Euler
              </Link>
            </li>
          </ul>

          <hr />

          <p>
            <Link to="/links">&lt; 戻る</Link>
          </p>
        </Layout>
    );
};

export default Others;
