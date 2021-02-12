import * as React from "react";
import Emoji from "../components/Emoji.jsx";
import Link from "../components/Link.jsx";
import Layout from '../components/Layout.jsx';
import PageTitle from '../components/PageTitle.jsx';
import UnderDevelopment from '../components/UnderDevelopment.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

const Links = () => {
    return (
        <Layout title="zk-phi の部屋 :: リンク集">
          <PageTitle><Emoji ji="🌏"/> リンク集 <Emoji ji="🌏" /></PageTitle>

          <p>
            私の活動、公開物などを見ることのできるサイト様の一覧です。
          </p>

          <p>
            <Link to="/">&lt; 戻る</Link>
          </p>

          <hr />

          <p>
            <Link href="https://www.resume.id/zk_phi">ポートフォリオ (RESUME)</Link>
          </p>

          <SectionHeader><Emoji ji="🐬" /> 製作物</SectionHeader>

          <ul>
            <li>
              <Link href="https://github.com/zk-phi">
                ソフト、ハード、フォントなど (GitHub)
              </Link>
            </li>
            <li>
              <Link href="https://cadlab.io/zk-phi">
                回路・基板設計 (CADLAB)
              </Link>
            </li>
            <li>
              <Link href="https://zenn.dev/zk_phi">
                技術書 (Zenn)
              </Link>
            </li>
            <li>
              <Link href="https://speakerdeck.com/zk_phi">
                発表スライド (Speakerdeck)
              </Link>
            </li>
            <li>
              <Link href="https://soundcloud.com/zk_phi">
                音楽 (Soundcloud)
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/channel/UC9_g5OIOEDXQsaqV3BkRWcQ">
                動画 (YouTube)
              </Link>
            </li>
            <li>
              <Link href="https://www.nicovideo.jp/mylist/66800354">
                動画 (ニコニコ動画)
              </Link>
            </li>
            <li>
              <Link href="https://quiz-maker.site/creator/detail/177123803">
                クイズ (クイズメーカー)
              </Link>
            </li>
          </ul>

          <SectionHeader><Emoji ji="🐬" /> ショップ</SectionHeader>

          <ul>
            <li>
              <Link href="https://zk-phi.booth.pm/">
                同人ハードなど (BOOTH)
              </Link>
            </li>
            <li>
              <Link href="https://make.dmm.com/shop/219669/">
                3D プリント製品 (DMM.make)
              </Link>
            </li>
            <li>
              <Link href="https://suzuri.jp/zk_phi">
                その他 (SUZURI)
              </Link>
            </li>
          </ul>

          <SectionHeader><Emoji ji="🐬" /> 記事</SectionHeader>

          <ul>
            <li>
              <Link href="https://qiita.com/zk_phi">
                プログラミング関連 (Qiita)
              </Link>
            </li>
            <li>
              <Link href="https://note.mu/zk_phi">
                趣味 (note)
              </Link>
            </li>
            <li>
              <Link href="https://scrapbox.io/zkphi/">
                雑感・公開メモ (Scrapbox)
              </Link>
            </li>
            <li>
              <Link href="https://reddit.com/u/zk_phi">
                海外フォーラム (Reddit)
              </Link>
            </li>
          </ul>

          <SectionHeader><Emoji ji="🐬" /> SNS アカウント</SectionHeader>

          <ul>
            <li>
              <Link href="https://twitter.com/zk_phi">
                Twitter
              </Link>
            </li>
            <li>
              <Link href="https://untappd.com/user/zk_phi">
                ビール (Untappd)
              </Link>
            </li>
            <li>
              <Link href="https://bookmeter.com/users/143741">
                読書 (読書メーター)
              </Link>
            </li>
            <li>
              <Link to="/404">mixi</Link>  <UnderDevelopment />
            </li>
          </ul>

          <SectionHeader><Emoji ji="🐬" /> その他</SectionHeader>

          <ul>
            <li>
              <Link to="/etc">イベント出展、メディア掲載など</Link>
            </li>
          </ul>

          <hr />

          <p>
            <Link to="/">&lt; 戻る</Link>
          </p>
        </Layout>
    );
};

export default Links;
